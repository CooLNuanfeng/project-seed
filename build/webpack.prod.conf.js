'use strict'
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackBaseConf = require('./webpack.base.conf');
const ExtractPlugin = require('extract-text-webpack-plugin');
//删除dist文件夹
const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpackConfig = merge(webpackBaseConf, {
    output: {
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    //将.vue中css单独抽出
                    extractCSS: true
                }
            },
            {
                test: /\.css$/,
                use: ExtractPlugin.extract({
                    fallback: "vue-style-loader", //编译后用什么loader来提取css文件
                    use: [
                        "css-loader",                        
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: false,
                            }
                        }
                    ] //用什么样的loader如编译文件
                })
            },
            {
                test: /\.less$/,
                use: ExtractPlugin.extract({
                    fallback: 'vue-style-loader',
                    use: [
                        'css-loader',
                        'postcss-loader',
                        'less-loader'
                    ]
                })
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(
            ['dist/*'],
            {
                root: __dirname,
                verbose: true,
                dry: false
            }
        ),
        new ExtractPlugin({
            filename: '[name]/css/[name].[hash:8].css',
            allChunks: true
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'vendor',
                    priority: 10,
                    enforce: true
                }
            }
        },
        runtimeChunk: false
    }
})


module.exports = webpackConfig;