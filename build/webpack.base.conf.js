const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

//路由定义
const outputDir = path.resolve(__dirname, '../dist/');
const commonDir = path.join(__dirname, '..', '../common/');



function resolve (dir) {
    return path.join(__dirname,'..',dir)
}

const webpackBaseConf = {
    entry: {
        vendor: ['vue', 'vue-router'],
        index: path.join(__dirname,'../src/pages/index' ,'main.js'),
        // page1: path.join(__dirname,'../src/pages/page1' ,'main.js'),
        page2: path.join(__dirname,'../src/pages/page2' ,'main.js'),
    },
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
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '首页带路由',
            filename: 'index.html',
            chunks: ['index', 'vendor'],
            template: commonDir + 'template/index.html',
            inject: true
        }),
        new HtmlWebpackPlugin({
            title: '带vuex路由页',
            filename: 'page1/index.html',
            chunks: ['page1', 'vendor'],
            template: commonDir + 'template/index.html',
            inject: true
        }),
        new HtmlWebpackPlugin({
            title: '单个HTML页面',
            filename: 'page2/index.html',
            chunks: ['page2', 'vendor'],
            template: commonDir + 'template/index.html',
            inject: true
        })
    ]
}


module.exports = webpackBaseConf;