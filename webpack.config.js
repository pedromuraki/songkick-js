const path = require('path');

module.exports = {
  entry: ['./index.js'],
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
