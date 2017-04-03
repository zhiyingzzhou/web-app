const join = require('path').join;
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');

const pug = require('pug');
// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

module.exports = merge(baseWebpackConfig,{
    devtool: '#cheap-module-eval-source-map',
    output: {
        chunkFilename: '[name].[chunkhash:5].chunk.js',
    },
    plugins: [
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
        inject: false,
        templateContent: function(templateParams, compilation, callback) {
            // Return your template content asynchronously here 
            const files = templateParams.htmlWebpackPlugin.files;
            const compiledFunction = pug.compileFile(join(process.cwd(),'config/template/tpl.pug'));
            return compiledFunction({files:files});
        }
    }),
    new FriendlyErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
        name:'vendor',
        filename: 'vendor.js'
    })
  ]
});

debugger


