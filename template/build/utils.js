const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const merge = require('webpack-merge');
//路由定义
const outputDir = path.resolve(__dirname, '../dist/');
const commonDir = path.join(__dirname, '..', '../common/');

//生成生产环境基础配置
exports.generateProdConf = function (entrys, prodBaseConf) {
    const webpackProConf = []
    entrys.forEach((entrys) => {
        return webpackProConf.push(merge(prodBaseConf,{
            entry: {
                [entrys.pageName]: path.join(__dirname,'../src/pages/'+entrys.pageName ,'main.js'),
            },
            output: {
                filename: 'js/[name].[hash:8].js',
                path: path.resolve(__dirname,'../dist/'+entrys.pageName)
            },
            plugins: [
                new HtmlWebpackPlugin({
                    title: entrys.pageTitle,
                    filename: 'index.html',
                    chunks: [entrys.pageName],
                    template: commonDir + 'template/index.html',
                    inject: true
                })
            ]
        }))
    });
    return webpackProConf;
}


//生成开发环境基础配置
exports.generateDevConf = function (entrys) {
    const baseConf = {
        entry:{},
        plugins:[]
    };
    entrys.forEach((ele, index)=>{
        baseConf.entry[ele.pageName] = path.join(__dirname,'../src/pages/'+ele.pageName ,'main.js');
        baseConf.plugins.push(
            new HtmlWebpackPlugin({
                title: ele.pageTitle,
                filename: index === 0 ? 'index.html': ele.pageName +'/index.html',
                chunks: [ele.pageName],
                template: commonDir + 'template/index.html',
                inject: true
            })
        );
    });
    return baseConf;
}
