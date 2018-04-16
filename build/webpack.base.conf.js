const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

//路由定义
const outputDir = path.resolve(__dirname, '../dist/');

const webpackBaseConf = {
    entry: {
        vendor: ['vue', 'vue-router'],
        index: path.join(__dirname,'pages/src/index' ,'main.js'),
        page1: path.join(__dirname,'pages/src/page1' ,'main.js'),
        page2: path.join(__dirname,'pages/src/page2' ,'main.js'),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugin: [
        new HtmlWebpackPlugin({
            title: '首页',
            filename: 'index.html',
            chunks: ['index', 'vendor'],
            template: 'index.html',
            inject: true
        }),
        new HtmlWebpackPlugin({
            title: '首页',
            filename: outputDir+'page1/index.html',
            chunks: ['index', 'vendor'],
            template: 'index.html',
            inject: true
        }),
        new HtmlWebpackPlugin({
            title: '首页',
            filename: outputDir+'page2/ndex.html',
            chunks: ['index', 'vendor'],
            template: 'index.html',
            inject: true
        })
    ]
}


module.exports = webpackBaseConf;