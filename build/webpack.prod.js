'use strict';

var WebpackConfig = require('webpack-config');
var webpack = require('webpack');

module.exports = new WebpackConfig().extend('./build/webpack.base.js').merge({
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ],
  stats: {
    colors: true,
    reasons: true
  },
  cache: false,
  debug: false
});
