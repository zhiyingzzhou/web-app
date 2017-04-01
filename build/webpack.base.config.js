/**
 * module dependencies
 */
const join = require('path').join;
const pug = require('pug');
const webpack = require('webpack');

// config
const config = require('../config');

// plugins
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const DashboardPlugin = require('webpack-dashboard/plugin');

// ajax
const Ajax = require('../config/ajax.js');

const extractSass = new ExtractTextPlugin({
    filename: "css/style.css",
    disable: process.env.NODE_ENV === "development"
});

function resolve(dir) {
    return join(__dirname, '..', dir)
}

module.exports = function(){
    return {
        context: config.srcPath, // 指定入口文件所在的目录(必须为绝对路径)
        entry: './main.js', //指定入口文件
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
            rules: [
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
            new HtmlWebpackPlugin({
                inject: false,
                templateContent: function(templateParams, compilation, callback) {
                    // Return your template content asynchronously here 
                    const files = templateParams.htmlWebpackPlugin.files;
                    const compiledFunction = pug.compileFile(join(process.cwd(),'config/template/tpl.pug'));
                    return compiledFunction({files:files});
                }
            }),
            new webpack.DefinePlugin({
                'prefixUrl': JSON.stringify(Ajax())
            })
            // new webpack.optimize.UglifyJsPlugin({
            //     compress: {
            //         screw_ie8: true, // React doesn't support IE8
            //         warnings: false
            //     },
            //     mangle: {
            //         screw_ie8: true
            //     },
            //     output: {
            //         comments: false,
            //         screw_ie8: true
            //     }
            // })
        ]
    }
}