/**
 * module dependencies
 */
const join = require('path').join;
const pug = require('pug');

// plugins
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "css/style.css",
    disable: process.env.NODE_ENV === "development"
});

// path
const srcPath = join(__dirname,'src/')

module.exports = function(){
    return {
        context: srcPath, // 指定入口文件所在的目录(必须为绝对路径)
        entry: './main.js', //指定入口文件
        output: {
            pathinfo: true,
            filename: 'js/bundle.js', //指定打包生成文件的名字
            path: join(srcPath, 'www'), // 指定打包生成的文件所在的目录,
            publicPath: '/www'
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.scss$/,
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
                    name: '/images/[name].[hash:7].[ext]'
                    }
                },
                {
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                    loader: 'url-loader',
                    options: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:7].[ext]'
                    }
                }
            ]
        },
        plugins: [
            extractSass,
            new HtmlWebpackPlugin({
                inject: false,
                templateContent: function(templateParams, compilation, callback) {
                    // Return your template content asynchronously here 
                    const files = templateParams.htmlWebpackPlugin.files;
                    const compiledFunction = pug.compileFile(join(process.cwd(),'config/template/tpl.pug'));
                    return compiledFunction({files:files});
                }
            })
        ]
    }
}