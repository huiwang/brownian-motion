var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './app/js/main.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: path.join(__dirname, 'app/js'),
      exclude: /node_modules/,
      loaders: ["babel-loader"],
    }],
  },
};
