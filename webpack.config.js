const path = require('path');
const process = require('process');
const ROOT_PATH = process.cwd();
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  devtool: 'source-map',

  context: path.resolve(ROOT_PATH, 'example'),
  entry: {
    app: './app.js'
  },
  output: {
    path: path.resolve(ROOT_PATH, 'dist'),
    filename: './app.bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.css']
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /.scss$/,
        loader: 'style!css!postcss!sass'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(ROOT_PATH, 'example/index.html')
    }),
    // new OpenBrowserPlugin({ url: 'http://localhost:8082' })
  ],
  postcss: [autoprefixer]
};
