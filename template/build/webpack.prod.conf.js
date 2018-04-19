const webpack = require('webpack');
const path = require('path');
const utils = require('./utils');
const entryArray = require('./webpack.fanli.conf');


const ExtractPlugin = require('extract-text-webpack-plugin');
//删除dist文件夹
const CleanWebpackPlugin = require('clean-webpack-plugin');


function resolve (dir) {
    return path.join(__dirname,'..',dir)
}

// 定义生产打包基础配置
const prodBaseConf = {
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
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                limit: 10000,
                name: 'img/[name].[hash:7].[ext]'
                }
            },
          ]
      },
    plugins: [ 
        new CleanWebpackPlugin(['dist/*'],
            {
                root: path.resolve(__dirname, '..'),
                verbose: true,
                dry: false
            }
        ),
        new ExtractPlugin({
            filename: 'css/[name].[hash:8].css',
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
}

const prodConf = utils.generateProdConf(entryArray, prodBaseConf);

module.exports = prodConf;