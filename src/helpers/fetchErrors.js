// helpers/fetchErrors.js
// 定义 FetchError 类，用于自定义错误
export default class FetchError extends Error {
    constructor(message, config, request, response) {
        super(message);
        this.name = 'FetchionError'; // 错误名称
        this.config = config; // 请求配置
        this.request = request; // 请求对象
        this.data = response; // 响应对象
    }
}

// 定义用于生成报错信息的函数
export function structMessage(status) {
    const statusMessages = {
        100: "继续：请求的初始部分已接收，客户端可以继续请求。",
        101: "切换协议：服务器将切换到客户端请求的协议。",
        200: "成功：请求已成功处理。",
        201: "已创建：请求已成功，并在服务器上创建了新资源。",
        202: "已接受：请求已接受，但尚未完成处理。",
        203: "非授权信息：返回的信息可能不准确或未经授权。",
        204: "无内容：请求成功，但没有内容返回。",
        205: "重置内容：请求成功，请重置视图。",
        206: "部分内容：服务器只返回了部分资源。",

        300: "多种选择：请求的资源存在多个可能的响应。",
        301: "永久移动：请求的资源已永久移动到新位置。",
        302: "临时移动：请求的资源暂时被移动到新位置。",
        303: "查看其他位置：建议客户端使用不同的 URI 来访问资源。",
        304: "未修改：请求的资源未更改，自上次访问以来没有更新。",
        307: "临时重定向：请求的资源临时移动到新位置，使用原方法请求。",
        308: "永久重定向：资源永久移动，使用原方法请求。",

        400: "请求格式错误，请检查提交的数据。",
        401: "未经授权的请求，请先登录。",
        402: "需要支付：访问该资源需要支付费用。",
        403: "权限不足，无法访问此资源。",
        404: "请求的资源未找到。",
        405: "方法不允许：请求的 HTTP 方法不被支持。",
        406: "无法接受：服务器无法满足客户端请求的内容格式。",
        407: "需要代理身份验证：客户端必须经过代理的身份验证。",
        408: "请求超时：服务器等待请求超时。",
        409: "冲突：请求与服务器的状态发生冲突。",
        410: "已删除：请求的资源已永久删除。",
        411: "需要有效长度：缺少请求所需的 Content-Length 标头。",
        412: "前提条件失败：请求头中条件未被满足。",
        413: "请求实体过大：请求数据大小超过服务器处理能力。",
        414: "请求 URI 过长：请求的 URI 超过服务器的处理能力。",
        415: "不支持的媒体类型：请求的媒体格式不被支持。",
        416: "请求范围不满足：请求的范围超出资源的可用范围。",
        417: "期望失败：服务器无法满足 Expect 请求头的要求。",
        418: "我是茶壶：服务器拒绝冲泡咖啡的请求（仅用于调试目的）。",

        500: "服务器内部错误，请稍后重试。",
        501: "未实现：服务器不支持所请求的功能。",
        502: "网关错误，服务器未响应。",
        503: "服务不可用，服务器暂时无法处理请求。",
        504: "网关超时：服务器未在预期时间内响应请求。",
        505: "HTTP 版本不支持：请求的 HTTP 版本不被支持。",
        507: "存储空间不足：服务器上存储空间不足，无法完成请求。",
        508: "检测到循环：服务器在处理请求时检测到无限循环。",
        510: "未扩展：请求的扩展功能未被支持。",
        511: "需要网络认证：客户端需要进行网络认证才能访问资源。",
    };

    return statusMessages[status] || "发生未知错误。";
}