const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");
const production = process.env.NODE_ENV === 'production';
module.exports  = {
    entry: { myAppName: path.resolve(__dirname, "src/index.js")},
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: production ? '[name].[contenthash].js' : '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: /node_modules/,
                use: [
                    production ? MiniCssExtractPlugin.loader : 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: !production
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: !production
                        }
                    }
                ]
            }
        ],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".scss"], //  нежописывать окончания
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(), // hot update
        new HtmlWebpackPlugin({
            title: 'webpack react',
            template: './src/index.html',
            favicon: './public/favicon.ico',
        }), // create html
        new MiniCssExtractPlugin({
            filename: production ? '[name].[contenthash].css' : '[name].css'
        })
    ],
    devServer: {
        port: 3000,
        hot: true,
    },
    mode: production ? 'production' : 'development'
}