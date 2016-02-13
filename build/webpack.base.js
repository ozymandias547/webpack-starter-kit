'use strict';

var webpack = require('webpack');
var paths = require('./paths.conf.js');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var bourbon = require('node-bourbon').includePaths;
var WebpackConfig = require('webpack-config');

module.exports = new WebpackConfig().merge({
    context: paths.srcPath,
    entry: {
        reactApp: paths.srcPath + "/appEntry.jsx"
    },
    output: {
        path: paths.target,
        filename: '[name]/[name].js',
        chunkFilename: '[name]/[id].common.js'
    },
    devtool: 'source-map',
    resolveLoader: {
        modulesDirectories: [
            path.join(__dirname, "..", "node_modules")
        ]
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.json']
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass?includePaths[]=" + bourbon)
            },
            {
                test: /\.css/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets:['react']
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name]/[name].css")
    ]
});

