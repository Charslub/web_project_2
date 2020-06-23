const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './src/js/main.js',
    output:{
        // 拼接路径
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
        // 添加一个图片读取路径头
        // publicPath:'dist/'
    },
    module:{
        rules:[{
            test: /\.css$/,
            // css-loader只负责加载css文件但不解析
            // 使用多个loader时是从右向左使用
            use: [ 'style-loader', 'css-loader']
            // 'style-loader'将样式渲染到dom中
        },
        {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        },
        {
            test: /\.(png|jpg|gif|jpeg)$/,
            use:[
                {
                    loader:'url-loader',
                    options:{
                        // 当加载的图片小于limit时图片会被编译成base64字符串形式
                        // 大于limit时则需要使用file-loader进行加载
                        limit: 8192,
                        // 8kb的限制
                        // 这里的name是为了设置对应图片的名称
                        // .hash:8则是对应其编码方式 防止名称重复
                        name: 'img/[name].[hash:8].[ext]'
                    }
                }
            ]
        },{
            rules: [
                {
                  test: /\.js$/,
                  exclude: /(node_modules|bower_components)/,
                  use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['es2015']
                    }
                  }
                }
              ]
        },{
            test: /\.vue$/,
            use: ['vue-loader']
        }]
    },
    // resolve一般用于解决路径问题
    resolve: {
        extensions:['.js', '.css', '.vue'],
        // alias：别名
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins:[
        // 版权添加
        new webpack.BannerPlugin('最终解释权由charslub所有'),
        // 这里是自动打包html文件
        new HtmlWebpackPlugin({
            // 所依据的生成模板
            template: 'index.html'
        })
    ]
}