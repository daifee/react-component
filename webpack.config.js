const path = require('path');
const process = require('process');
const ROOT_PATH = process.cwd();
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const filename = {
  js: process.env.NODE_ENV === 'production' ? './index.min.js' : './index.js',
  css: process.env.NODE_ENV === 'production' ? './index.min.css' : './index.css'
};

module.exports = {
  // devtool: 'source-map',

  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(ROOT_PATH, 'dist'),
    filename: filename.js,
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
      /**
       * 被 webpack 坑死，请仔细看下面代码块 **Externals**
       * 同一个配置，“作为 UMD 库依赖模块”与“项目依赖模块”所生成的代码逻辑不同
       */
      'react-addons-css-transition-group': {
        // UMD 依赖模块： root['React']['addons']['CSSTransitionGroup']
        // 项目依赖模块：module.exports = React.addons.CSSTransitionGroup;
        // 作为项目依赖模块时，root 的值不能是数组，只能是 {root: 'React.addons.CSSTransitionGroup'}
        root: ['React','addons','CSSTransitionGroup'],
        commonjs2: 'react-addons-css-transition-group',
        commonjs: 'react-addons-css-transition-group',
        amd: 'react-addons-css-transition-group'
      },
      'xiscroll': {
        root: 'IScroll',
        commonjs2: 'xiscroll',
        commonjs: 'xiscroll',
        amd: 'xiscroll'
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
        loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
      },
      {
        test: /\.(eot|ttf|woff|svg)$/,
        loader: 'url?name=fonts/[name].[hash].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new ExtractTextPlugin(filename.css)
  ],
  postcss: [autoprefixer]
};


/**
 * ExternalS 巨坑
 */

// 开发 UMD 库
// if(typeof exports === 'object' && typeof module === 'object')
//   module.exports = factory(require("react"), require("react-dom"), require("react-addons-css-transition-group"));
// else if(typeof define === 'function' && define.amd)
//   define(["react", "react-dom", "react-addons-css-transition-group"], factory);
// else if(typeof exports === 'object')
//   exports["DaifeeReactComponent"] = factory(require("react"), require("react-dom"), require("react-addons-css-transition-group"));
// else
//   root["DaifeeReactComponent"] = factory(root["React"], root["ReactDOM"], root["React"]["addons"]["CSSTransitionGroup"]);


// 开发项目
// /* 142 */
// /***/ function(module, exports) {

//   module.exports = React.addons.CSSTransitionGroup;

// /***/ },
