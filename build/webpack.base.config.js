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
const prefix = require('../config/prefix.js');

function resolve(dir) {
    return join(__dirname, '..', dir)
}

const extractSass = new ExtractTextPlugin({
    filename: "css/style.css",
    disable: process.env.NODE_ENV === "development"
});

// 公共库
const vendor = [
    'react',
    'react-dom',
    'react-redux',
    'redux',
    'redux-thunk'
]

module.exports = {
    context: config.srcPath, // 指定入口文件所在的目录(必须为绝对路径)
    entry: {
        vendor: vendor,
        main: './main.js', //指定入口文件
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
            'md5': resolve('node_modules/blueimp-md5/js/md5.min.js'),
            'store': resolve('node_modules/store/dist/store.legacy.min.js'),
            'pages': resolve('src/pages'),
            'views': resolve('src/views'),
            'images': resolve('src/www/images'),
            'components': resolve('src/pages/components'),
            'config': resolve('config'),
            'constants': resolve('src/constants'),
            'actions': resolve('src/actions'),
            'app': resolve('app'),
            'TransitionPages': resolve('app/components/TransitionPages'),
            'utils': resolve('src/utils')
            // 'react': resolve('node_modules/react/dist/react.min.js'),
            // 'react-dom': resolve('node_modules/react-dom/dist/react-dom.min.js')
        },
        extensions: ['.js','.jsx','.json','.scss']
    },
    module: {
        rules: [
            {
                    test: /\.(js|jsx)$/,
                    loader: 'babel-loader',
                    options: {
                        // @remove-on-eject-begin
                        // babelrc: false,
                        // presets: [require.resolve('babel-preset-react-app')],
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
                    use: extractSass.extract({
                        use: [
                            {
                                loader: "css-loader",
                                options: {
                                    sourceMap: true
                                }
                            }, 
                            {
                                loader: "sass-loader",
                                options: {
                                    sourceMap: true
                                }
                            }
                        ],
                        // use style-loader in development
                        fallback: "style-loader"
                    })
                },
                {
                    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                    loader: 'url-loader',
                    options: {
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
        extractSass,
        // new DashboardPlugin(),
        new webpack.DefinePlugin({
            'prefixUrl': JSON.stringify(prefix()),
            // When deploying React apps to production, make sure to use the production build which skips development warnings and is faster
            "process.env": { 
                NODE_ENV: JSON.stringify(process.env.NODE_ENV) 
            }
        })
    ]
}