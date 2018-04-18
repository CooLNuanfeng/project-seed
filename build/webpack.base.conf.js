const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');
//删除dist文件夹
const CleanWebpackPlugin = require('clean-webpack-plugin');

//路由定义
const outputDir = path.resolve(__dirname, '../dist/');
const commonDir = path.join(__dirname, '..', '../common/');

console.log(outputDir);


function resolve (dir) {
    return path.join(__dirname,'..',dir)
}

const webpackBaseConf = [{
    entry: {
        index: path.join(__dirname,'../src/pages/index' ,'main.js'),
        // page1: path.join(__dirname,'../src/pages/page1' ,'main.js'),
        // page2: path.join(__dirname,'../src/pages/page2' ,'main.js'),
    },
    output: {
        filename: '[name]/js/[name].[hash:8].js',
        path: path.resolve(__dirname,'../dist/')
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
                name: 'index/img/[name].[hash:7].[ext]'
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
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '首页带路由',
            filename: 'index.html',
            chunks: ['index'],
            template: commonDir + 'template/index.html',
            inject: true
        }),
        new CleanWebpackPlugin(
            ['dist/*'],
            {
                root: path.resolve(__dirname, '..'),
                verbose: true,
                dry: false
            }
        ),
        new ExtractPlugin({
            filename: '[name]/css/[name].[hash:8].css',
            allChunks: true
        })
        // new HtmlWebpackPlugin({
        //     title: '带vuex路由页',
        //     filename: 'page1/index.html',
        //     chunks: ['page1', 'vendor'],
        //     template: commonDir + 'template/index.html',
        //     inject: true
        // }),
        // new HtmlWebpackPlugin({
        //     title: '单个HTML页面',
        //     filename: 'page2/index.html',
        //     chunks: ['page2', 'vendor'],
        //     template: commonDir + 'template/index.html',
        //     inject: true
        // })
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
},
{
    entry: {
        // index: path.join(__dirname,'../src/pages/index' ,'main.js'),
        // page1: path.join(__dirname,'../src/pages/page1' ,'main.js'),
        page2: path.join(__dirname,'../src/pages/page2' ,'main.js'),
    },
    output: {
        filename: 'js/[name].[hash:8].js',
        path: path.resolve(__dirname,'../dist/page2'),
        // publicPath: '/'
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
            }
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     title: '首页带路由',
        //     filename: 'index.html',
        //     chunks: ['index', 'vendor'],
        //     template: commonDir + 'template/index.html',
        //     inject: true
        // }),
        // new HtmlWebpackPlugin({
        //     title: '带vuex路由页',
        //     filename: 'page1/index.html',
        //     chunks: ['page1', 'vendor'],
        //     template: commonDir + 'template/index.html',
        //     inject: true
        // }),
        new HtmlWebpackPlugin({
            title: '单个HTML页面',
            filename: 'index.html',
            chunks: ['page2', 'vendor'],
            template: commonDir + 'template/index.html',
            inject: true
        }),
        new CleanWebpackPlugin(
            ['dist/*'],
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
}]




module.exports = webpackBaseConf;