var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './main.js',
  output: { path: '.', filename: 'bundle.js' },
  module: {
  loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ["babel-loader"],
    }
  ],
},
};
