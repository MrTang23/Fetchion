// config.js 用户配置文件
import Fetchion from './core/Fetchion.js';

const config = {
    baseURL: 'http://127.0.0.1:8000', // 基础 API URL
    headers: {
        'Content-Type': 'application/json', // 默认 Content-Type
    },
    timeout: 5000, // 超时时间（以毫秒为单位）
};

const api = new Fetchion(config);

api.interceptors.request.use((config) => {

    // 自定义请求头
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');

    return config;
}, (error) => {
    return Promise.reject(error);
});

api.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error);
});

export default api;