const join = require('path').join;
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');

const pug = require('pug');
// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve(dir) {
    return join(__dirname, '..', 'node_modules' , dir)
}

module.exports = merge(baseWebpackConfig,{
    // devtool: 'cheap-module-source-map',
    devtool: 'source-map',
    resolve: {
        root: 'E:/github/flux-example/src',
        alias: {
            'react': resolve('react/dist/react.min.js'),
            'react-dom': resolve('react-dom/dist/react-dom.min.js'),
            'redux': resolve('redux/dist/redux.min.js'),
            'react-redux': resolve('react-redux/dist/react-redux.min.js'),
            'redux-thunk': resolve('redux-thunk/dist/redux-thunk.min.js'),
            'react-router-dom': resolve('react-router-dom/umd/react-router-dom.min.js')
        }
    },
    output: {
        pathinfo: false,
        filename: 'js/[name].[chunkhash:8].js',
        chunkFilename: 'js/[id].[chunkhash:8].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            templateContent: function(templateParams, compilation, callback) {
                // Return your template content asynchronously here 
                const files = templateParams.htmlWebpackPlugin.files;
                const compiledFunction = pug.compileFile(join(process.cwd(),'config/template/tpl.pug'));
                return compiledFunction({files:files});
            },
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
            chunksSortMode: 'dependency'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true, // React doesn't support IE8
                warnings: false
            },
            mangle: {
                screw_ie8: true
            },
            output: {
                comments: false,
                screw_ie8: true
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor',
            filename: 'js/vendor.[chunkhash:8].js'
        })
    ]
});