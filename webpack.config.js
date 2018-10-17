const path = require('path');
// const webpack = require('webpack');
// require('babel-polyfill');

module.exports = {
  entry: [
    // 'babel-polyfill',
    './index.js'
  ],
  output: {
    filename: 'SongkickJS.min.js',
    path: path.resolve(__dirname, './dist'),
    library: 'SongkickJS',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
  },
  devtool: 'source-map'
};

// module.exports = {
//   entry: [
//     // 'babel-polyfill',
//     './examples/app.js'
//   ],
//   output: {
//     filename: 'app.bundle.js',
//     path: path.resolve(__dirname, './examples/bundle')
//   },
//   module: {
//     rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
//   },
//   devtool: 'source-map'
// };
