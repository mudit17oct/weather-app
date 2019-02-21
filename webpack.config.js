const webpack = require('webpack'); 
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: ['./src/index.js', "./src/styles/main.scss"],
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'eslint-loader']
          },
          {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(["css-loader", "sass-loader"])
          }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    devtool: "cheap-source-map",
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('style.css'),
    ],
    devServer: {
      contentBase: './dist',
      hot: true,
      port: 3001
    }
  };