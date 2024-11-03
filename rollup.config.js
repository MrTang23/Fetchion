import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import {terser} from 'rollup-plugin-terser';

export default {
    input: 'main.js', // 入口文件
    output: [
        {
            file: 'dist/fetchion.umd.js', // 输出文件
            format: 'umd', // 输出格式
            name: 'Fetchion', // 全局变量名称
            sourcemap: true, // 生成 source map
        },
        {
            file: 'dist/fetchion.esm.js', // 输出文件
            format: 'esm', // ES module 格式
            sourcemap: true,
        }
    ],
    plugins: [
        resolve(), // 解决依赖
        commonjs(), // 转换 CommonJS 模块
        terser() // 压缩代码
    ]
};