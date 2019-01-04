var config = require('./webpack.base.config');
var webpack = require('webpack');

config.devtool = 'inline-source-map';

module.exports = config;
