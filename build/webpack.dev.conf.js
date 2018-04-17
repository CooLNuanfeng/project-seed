const merge = require('webpack-merge');
const webpackBaseConf = require('./webpack.base.conf');

const webpackDevConf = merge(webpackBaseConf, {
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
    }
});

module.exports = webpackDevConf;