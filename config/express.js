/**
 * module dependencies
 */
const join = require('path').join;
const express = require('express');
const compression = require('compression');

// webpack
const webpack = require('webpack');
// webpack middleware
const webpackMiddleware = require("webpack-dev-middleware");
// webpack config
const webpackConfig = require(join(process.cwd(),'build/webpack.base.config'))();

module.exports = app => {

    app.use(compression());

    app.use(express.static(join(process.cwd(),'src')));
    // webpack middleware 
    app.use(webpackMiddleware(webpack(webpackConfig),{
        noInfo: false,
        publicPath: webpackConfig.output.publicPath
    }));
}