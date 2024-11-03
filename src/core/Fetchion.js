// core/Fetchion.js
import Dispatcher from './Dispatcher.js';
import Interceptor from './Interceptor.js';

class Fetchion {
    constructor(config) {
        this.config = config;
        this.dispatcher = new Dispatcher(config);
        this.interceptors = {
            request: new Interceptor(),
            response: new Interceptor(),
        };
    }

    async request(userConfig) {
        // 合并默认配置和请求配置
        const config = {...this.config, ...userConfig};

        // 先运行请求拦截器
        const configAfterRequest = await this.interceptors.request.runInterceptors(config);

        // 发送请求
        const response = await this.dispatcher.request(configAfterRequest);

        // 运行响应拦截器并返回最终结果
        return this.interceptors.response.runInterceptors(response);
    }

    get(url, config = {}) {
        return this.request({...config, method: 'GET', url});
    }

    post(url, data, config = {}) {
        return this.request({...config, method: 'POST', url, data});
    }

    put(url, data, config = {}) {
        return this.request({...config, method: 'PUT', url, data});
    }

    delete(url, config = {}) {
        return this.request({...config, method: 'DELETE', url});
    }

    patch(url, data, config = {}) {
        return this.request({...config, method: 'PATCH', url, data});
    }

    head(url, config = {}) {
        return this.request({...config, method: 'HEAD', url});
    }

    options(url, config = {}) {
        return this.request({...config, method: 'OPTIONS', url});
    }
}

export default Fetchion;