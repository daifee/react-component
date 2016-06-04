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
  externals: {
    // 'react': 'React',
    // 'react-dom': 'ReactDOM',
    // 'react-addons-css-transition-group': 'React.addons.CSSTransitionGroup',
    // 'daifee-react-component': 'DaifeeReactComponent'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.css'],
    alias: {
      'daifee-react-component': '../../src'
    }
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
        loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
      },
      {
        test: /\.(eot|ttf|woff|svg)$/,
        loader: 'url?name=fonts/[name].[hash].[ext]'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(ROOT_PATH, 'example/index.html')
    }),
    new ExtractTextPlugin('app.css'),
    new OpenBrowserPlugin({ url: 'http://localhost:8082' })
  ],
  postcss: [autoprefixer]
};
