var webpack = require('webpack');

module.exports = {
  entry: './bootstrap.js',
  output: {
    filename: 'built.js'       
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader?harmony' } 
    ],
    noParse: /traceur/
  },
  plugins: [new webpack.optimize.UglifyJsPlugin()] // If this is commented out it works
};