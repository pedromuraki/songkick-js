const path = require('path');
const webpack = require('webpack');
require('babel-polyfill');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/js/app.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './src/js/bundle')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  devtool: 'source-map'
}
