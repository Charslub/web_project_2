const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

// 合并两个配置文件
module.exports = webpackMerge(baseConfig, {
    plugins:[
        // 调用丑化插件
        // new uglifyJsPlugin()
    ]
})