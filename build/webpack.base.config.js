/**
 * module dependencies
 */
const join = require('path').join;
const webpack = require('webpack');

// config
const config = require('../config');

// plugins
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const DashboardPlugin = require('webpack-dashboard/plugin');

// ajax uri config
const Ajax = require('../config/ajax.js');

function resolve(dir) {
    return join(__dirname, '..', dir)
}

// 公共库
const vendor = [
    'react',
    'react-dom',
    'react-redux',
    'redux',
    'redux-thunk',
    'react-router-dom'
]

module.exports = {
    context: config.srcPath, // 指定入口文件所在的目录(必须为绝对路径)
    entry: {
        vendor: vendor,
        main: '../src/main', //指定入口文件
    }, 
    output: {
        pathinfo: true,
        filename: 'js/bundle.js', //指定打包生成文件的名字
        path: join(config.srcPath, 'www'), // 指定打包生成的文件所在的目录,
        publicPath: '/www'
    },
    devtool: 'source-map',
    resolve: {
        alias: {
            'pages': resolve('src/pages'),
            'views': resolve('src/views'),
            'images': resolve('src/www/images'),
            'components': resolve('src/pages/components'),
            'config': resolve('config')
            // 'react': resolve('node_modules/react/dist/react.min.js'),
            // 'react-dom': resolve('node_modules/react-dom/dist/react-dom.min.js')
        },
        extensions: ['.js','.jsx','.json','.scss']
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                query: {
                    // @remove-on-eject-begin
                    babelrc: false,
                    presets: [require.resolve('babel-preset-react-app')],
                    // @remove-on-eject-end
                    // This is a feature of `babel-loader` for webpack (not Babel itself).
                    // It enables caching results in ./node_modules/.cache/babel-loader/
                    // directory for faster rebuilds.
                    cacheDirectory: true
                }
            },
            {
                test: /\.scss$/,
                include: [resolve('src')],
                use: ExtractTextPlugin.extract("css-loader", "sass-loader")
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'images/[name].[hash:7].[ext]'
                }
            }
            // {
            //     test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            //     loader: 'url-loader',
            //     options: {
            //     limit: 10000,
            //     name: 'www/[name].[hash:7].[ext]'
            //     }
            // }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/styles.css"),
        // new DashboardPlugin(),
        new webpack.DefinePlugin({
            'prefixUrl': JSON.stringify(Ajax()),
            'NODE_ENV': process.env.NODE_ENV
        })
    ]
}