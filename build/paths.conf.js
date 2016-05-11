'use strict';

var concat = require('path').normalize;

module.exports.target = concat(process.cwd() + '/dist/public');
module.exports.srcPath = concat(process.cwd() + '/src');