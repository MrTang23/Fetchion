# Fetchion

Fetchion 是一个轻量级且灵活的 JavaScript 库，旨在简化 HTTP 请求，遵循 RESTful API 原则。它提供了一个简单直观的 API，支持处理各种请求方法，内置支持拦截器、自定义配置和自动内容类型处理。

## 特性

- **支持所有常用 HTTP 方法：** GET、POST、PUT、DELETE、PATCH、HEAD、OPTIONS。
- **自动内容类型处理：** 如果未指定，则默认使用 JSON。
- **拦截器：** 添加请求和响应拦截器以修改请求或处理响应。
- **灵活配置：** 轻松自定义请求配置和默认设置。
- **错误处理：** 针对不同 HTTP 状态码提供自定义错误消息。

## 安装

你可以通过 npm 安装 Fetchion：

```bash
npm install fetchion
```

## 使用

### 基本配置

首先，导入 Fetchion 库，并使用你的默认配置创建一个实例：
```javascript
import Fetchion from 'fetchion';

const config = {
    baseURL: 'http://127.0.0.1:8000', // 基础 API URL
    headers: {
        'Content-Type': 'application/json', // 默认 Content-Type
    },
    timeout: 5000, // 超时时间（以毫秒为单位）
};

const api = new Fetchion(config);
```

### 发送请求

### GET 请求

要发送 GET 请求，可以使用 get 方法：
```javascript
api.get('/endpoint')
    .then(response => {
        console.log('响应:', response);
    })
    .catch(error => {
        console.error('错误:', error);
    });
```
### 带 JSON 数据的 POST 请求
对于发送 JSON 数据的 POST 请求，可以使用 post 方法：
```javascript
const postData = { key: 'value' };

api.post('/endpoint', postData)
    .then(response => {
        console.log('响应:', response);
    })
    .catch(error => {
        console.error('错误:', error);
    });
```

### 自定义请求内容类型

你可以在请求配置中指定自定义的 dataType。如果省略，Fetchion 将默认使用 JSON：
```javascript
const postData = { key: 'value' };

// 使用默认的 JSON
api.post('/endpoint', postData)
    .then(response => {
        console.log('响应:', response);
    })
    .catch(error => {
        console.error('错误:', error);
    });

// 指定不同的数据类型
api.post('/endpoint', postData, { dataType: 'form' })
    .then(response => {
        console.log('响应:', response);
    })
    .catch(error => {
        console.error('错误:', error);
    });
```


### 添加拦截器

你可以添加请求和响应拦截器，以全局处理请求和响应：
```javascript
api.interceptors.request.use(config => {
    console.log('请求拦截器:', config);
    return config; // 必须返回 config 以继续
}, error => {
    return Promise.reject(error);
});

api.interceptors.response.use(response => {
    console.log('响应拦截器:', response);
    return response; // 必须返回响应以继续
}, error => {
    return Promise.reject(error);
});
```


### 错误处理

Fetchion 提供自定义的错误类 FetchError，用于捕获请求错误并提供详细的错误信息：
```javascript
api.get('/invalid-endpoint')
    .then(response => {
        console.log('响应:', response);
    })
    .catch(error => {
        if (error instanceof Fetchion.FetchError) {
            console.error('自定义错误:', error.message);
        } else {
            console.error('其他错误:', error);
        }
    });
```


## 贡献

欢迎对 Fetchion 的贡献！请提交 Pull Request 或报告问题。

## 许可证

本项目遵循 MIT 许可证。详细条款请参阅 [LICENSE 文件](./LICENSE)。

---

版权所有 © 2024 MrTang23