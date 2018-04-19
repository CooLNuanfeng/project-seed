const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const utils = require('./utils');
const entryArray = require('./webpack.fanli.conf');

function resolve (dir) {
    return path.join(__dirname,'..',dir)
}


const devBaseConf = utils.generateDevConf(entryArray);


const webpackDevConf = merge(devBaseConf, {
    output: {
        filename: '[name]/js/[name].[hash:8].js',
        path: path.resolve(__dirname,'../dist')
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
          '@': resolve('src'),
        }
      },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                        "style-loader", //编译后用什么loader来提取css文件 
                        "css-loader",                        
                        'postcss-loader'
                    ] //用什么样的loader如编译文件
            },
            {
                test: /\.less$/,
                use: [
                        'css-loader',
                        'postcss-loader',
                        'less-loader'
                    ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['env']
                  }
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                limit: 10000,
                name: 'img/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    devServer: {
        /**
         * 告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要。
         * devServer.publicPath 将用于确定应该从哪里提供 bundle，并且此选项优先。
         * 推荐使用绝对路径。
         */
        // contentBase: '',
        port: 8999,
        host: '0.0.0.0',
        //自动打开浏览器
        open: true,
        //不会重新加载数据 需要安装plugin: HotModuleReplacementPlugin
        // hot: true,
        //所有错误都展示在页面上
        overlay: {
            errors: true
        }
    },
});

module.exports = webpackDevConf;