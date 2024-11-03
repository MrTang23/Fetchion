// core/Dispatcher.js
import mergeConfig from '../helpers/mergeConfig.js';
import fetchAdapter from '../adapters/fetchAdapter.js';

class Dispatcher {
  constructor(defaultConfig) {
    this.defaultConfig = defaultConfig;
  }

  async request(userConfig) {
    try {
      // 合并默认配置和用户配置
      const finalConfig = mergeConfig(this.defaultConfig, userConfig);

      // 使用 fetchAdapter 发送请求并返回响应
      return await fetchAdapter(finalConfig); // 正常返回数据
    } catch (error) {
      throw error;
    }
  }
}

export default Dispatcher;