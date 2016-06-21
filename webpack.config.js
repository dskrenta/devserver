'use strict';
const path = require('path');
const webpack = require("webpack");

function fromRootDir(matchPath) {
    return new RegExp(process.cwd() + matchPath);
}

module.exports = {
  cache: true,
  debug: true,
  devtool: 'eval',
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, "build"),
    publicPath: '/assets/',
    filename: 'build.min.js'
  },
  resolve: {
    extensions: ['', '.js', '.json', '.coffee']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
};
