/**
 * module dependencies
 */
const join = require('path').join;
const express = require('express');
const compression = require('compression');
const DashboardPlugin = require('webpack-dashboard/plugin');

// webpack
const webpack = require('webpack');
// webpack middleware
const webpackMiddleware = require("webpack-dev-middleware");
// webpack config
const webpackDevConfig = require(join(process.cwd(),'build/webpack.dev.config'));

module.exports = app => {

    app.use(compression());
    app.use(express.static(join(process.cwd(),'src')));
    if(process.env.NODE_ENV === 'development'){
        const compiler = webpack(webpackDevConfig);
        // compiler.apply(new DashboardPlugin());
        // webpack middleware 
        app.use(webpackMiddleware(compiler,{
            noInfo: false,
            publicPath: webpackDevConfig.output.publicPath
        }));
    };

    
}