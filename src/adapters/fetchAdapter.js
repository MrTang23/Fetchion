// adapters/fetchAdapter.js
import buildURL from '../helpers/buildURL.js';
import FetchError, {structMessage} from "../helpers/fetchErrors.js";

async function fetchAdapter(config) {
    const {baseURL, url, method, headers = {}, params, data} = config;
    const dataType = config.dataType || 'json';  // 如果未定义，默认使用 'json'


    // 生成完整的请求 URL
    const fullURL = buildURL(baseURL, url, params);

    // 初始化请求选项
    const requestOptions = {
        method: method.toUpperCase(),
        headers: {...headers},
    };

    // 根据 dataType 动态处理请求体和 Content-Type
    if (data) {
        switch (dataType) {
            case 'form':
                requestOptions.body = data;
                delete requestOptions.headers['Content-Type']; // FormData 自动处理
                break;

            case 'x-www-form-urlencoded':
                requestOptions.body = new URLSearchParams(data);
                requestOptions.headers['Content-Type'] = 'application/x-www-form-urlencoded';
                break;

            case 'json':
                requestOptions.body = JSON.stringify(data);
                requestOptions.headers['Content-Type'] = 'application/json';
                break;

            case 'xml':
                requestOptions.body = data;
                requestOptions.headers['Content-Type'] = 'application/xml';
                break;

            case 'raw':
                requestOptions.body = data;
                requestOptions.headers['Content-Type'] = 'text/plain';
                break;

            case 'binary':
                requestOptions.body = data;
                requestOptions.headers['Content-Type'] = 'application/octet-stream';
                break;

            case 'GraphQL':
                requestOptions.body = JSON.stringify({query: data});
                requestOptions.headers['Content-Type'] = 'application/graphql';
                break;

            case 'msgPack':
                requestOptions.body = data;
                requestOptions.headers['Content-Type'] = 'application/msgpack';
                break;

            default:
                break;
        }
    }

    try {
        const response = await fetch(fullURL, requestOptions);

        let responseData;
        try {
            responseData = await response.json();
        } catch {
            responseData = null; // 解析失败时设置为空
        }

        if (!response.ok) { // 手动检查状态码是否为非 2xx
            const errorMessage = `${response.status} - ${structMessage(response.status)}`;
            throw new FetchError(
                errorMessage,
                config,
                requestOptions,
                {
                    status: response.status,
                    data: responseData,
                    headers: response.headers,
                }
            );
        }

        return {data: responseData, status: response.status, headers: response.headers}; // 请求成功，返回数据

    } catch (error) {
        // 捕获 FetchError 和其他类型的错误
        if (error instanceof FetchError) {
            console.error(error);
        } else {
            console.error("其他错误或网络错误:", error);
        }
        throw error;
    }
}

export default fetchAdapter;