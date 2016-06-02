const path = require('path');
const process = require('process');
const ROOT_PATH = process.cwd();
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'source-map',

  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(ROOT_PATH, 'dist'),
    filename: './index.js',
    library: 'DaifeeReactComponent',
    libraryTarget: 'umd'
  },
  externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      },
      'react-addons-css-transition-group': {
        root: ['React','addons','CSSTransitionGroup'],
        commonjs2: 'react-addons-css-transition-group',
        commonjs: 'react-addons-css-transition-group',
        amd: 'react-addons-css-transition-group'
      }
    }
  ],
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
      },
      {
        test: /\.(eot|ttf|woff|svg)$/,
        loader: 'url?name=fonts/[name].[hash].[ext]'
      }
    ]
  },
  plugins: [],
  postcss: [autoprefixer]
};
