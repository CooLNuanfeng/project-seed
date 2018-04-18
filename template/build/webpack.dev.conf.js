const merge = require('webpack-merge');
const webpackBaseConf = require('./webpack.base.conf');

const webpackDevConf = merge(webpackBaseConf, {
    module: {
        rules: [

        ]
    },
    devtool: '',
    devServer: {
        host: '0.0.0.0',
        port: 8886,
    }
});

module.exports = webpackDevConf;