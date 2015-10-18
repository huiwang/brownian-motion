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
      include: [
        path.resolve(__dirname, "app/src")
      ],
      loader: "babel-loader"
    }],
  },
};
