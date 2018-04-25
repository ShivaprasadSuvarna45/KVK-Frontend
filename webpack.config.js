var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
require("babel-polyfill");
module.exports = {
  devtool: 'eval-source-map',
  entry:["babel-polyfill",__dirname + "/src/index.js"],
  output: {
    path: __dirname + "/dist/",
    filename: "app.min.js",
    publicPath: '/'
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

devtool: "source-map" ,
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    historyApiFallback: true,
    inline: true,
    hot: true
  }
}
 