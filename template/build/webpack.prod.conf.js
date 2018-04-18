'use strict'
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackBaseConf = require('./webpack.base.conf');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpackConfig = merge(webpackBaseConf, {
    output: {
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [

        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks (module) {
              return (
                module.resource &&
                /\.js$/.test(module.resource) &&
                module.resource.indexOf(
                  path.join(__dirname, '../node_modules')
                ) === 0
              )
            }
          })
    ]
})


module.exports(webpackConfig);