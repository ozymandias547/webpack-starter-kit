'use strict';

var WebpackConfig = require('webpack-config');

module.exports = new WebpackConfig().extend('./build/webpack.base.js').merge({});
