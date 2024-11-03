// helpers/buildURL.js
function buildURL(baseURL, url, params) {
    // 拼接 baseURL 和 url
    const fullURL = baseURL.replace(/\/+$/, '') + '/' + url.replace(/^\/+/, '');

    // 如果没有传入参数，直接返回完整 URL
    if (!params) return fullURL;

    // 创建 URLSearchParams 实例，用于构建查询字符串
    const searchParams = new URLSearchParams();

    // 遍历 params 对象，将每个参数添加到 searchParams 中
    for (const key in params) {
        if (params.hasOwnProperty(key)) {
            const value = params[key];

            if (value === null || value === undefined) continue;

            // 如果值是数组，使用多个相同键的值表示，例如 ?key=value1&key=value2
            if (Array.isArray(value)) {
                value.forEach(val => searchParams.append(key, val));
            } else {
                searchParams.append(key, value);
            }
        }
    }

    const queryString = searchParams.toString();
    return queryString ? `${fullURL}?${queryString}` : fullURL;
}

export default buildURL;