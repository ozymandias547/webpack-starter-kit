var path = require('path'),
    paths = require('./paths.conf.js'),
    webpack = require( 'webpack' );

require('phantomjs-polyfill')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function ( config ) {

	config.set( {
        frameworks: [
            'jasmine'
        ],
        files: [
			'../node_modules/phantomjs-polyfill/bind-polyfill.js',
			{
                pattern: path.normalize(process.cwd() + '/../src/**/*Spec.js')
            }
        ],

        plugins: [
            require( 'karma-webpack' ),
            require( 'karma-jasmine' ),
            require( 'karma-chrome-launcher' ),
			require( 'karma-phantomjs-launcher' ),
			require( 'karma-firefox-launcher' ),
			require( 'karma-safari-launcher' )
        ],

        reporters: [ 'dots' ],
        port: 9876,
        colors: true,
        autoWatch: false,
        browsers: [ 'Chrome', 'Firefox', 'Safari'],
        singleRun: true,
		webpack: {
			cache: true,
			devtool: 'inline-source-map',
			module: {
				loaders: [
					{
						exclude: /node_modules/,
						loader: 'babel-loader',
						query: {
							presets:['react']
						},
						test: /\.jsx?$/
					},
					{
						test: /\.scss$/,
						loader: 'css-loader!sass-loader'
					}
				]
			}
		}

    } );

    // Set preprocessors after the fact in order to have a dynamic key
    config.preprocessors[path.normalize(process.cwd() + '/../src/**/*Spec.js')] = [ 'webpack' ];
	config.preprocessors[path.normalize(process.cwd() + '/../src/**/*Spec.jsx')] = [ 'webpack' ];
};
