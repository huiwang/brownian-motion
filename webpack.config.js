var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './app/src/main.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      //match all js files
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }],
  },
};
