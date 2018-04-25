var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
require("babel-polyfill");
module.exports = {

  entry: ["babel-polyfill",__dirname + "/src/index.js"],
  output: {
    path: __dirname + "/public",
    filename: "app.min.js"
  },

  module: {
    loaders: [

       {test: /\.scss$/,loaders: ['style-loader', 'css-loader', 'sass-loader']},
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.(png|jpg|ttf|eot)$/,
        exclude: /node_modules/, 
        loader: 'url-loader?limit=10000'
      },
      
    ]
  },
  node: {
    fs: "empty"
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
     new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html"
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true, 
      sourcemap: false, 
      compress: {
        warnings: false,
      }
    }),
  ]

}