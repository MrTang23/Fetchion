// helpers/mergeConfig.js
export default function mergeConfig(defaultConfig, config) {
    return {
        ...defaultConfig,
        ...config,
        headers: {...defaultConfig.headers, ...config.headers},
    };
}