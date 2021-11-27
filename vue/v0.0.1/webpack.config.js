const path = require('path');
const HtmlWebpackPlugin =require('html-webpack-plugin')
module.exports = {
  mode : 'development',
  entry : './script/main.js',
  output : {
    path: path.resolve(__dirname, 'dist'),
    filename : 'bundle.js'
  },

  devServer : {
    compress : true,
    port : 9999
  },

  module : {
    rules:[
      {
        test : /\.js$/,
        exclude: /node_moules/,
        use : {
          loader : 'babel-loader',
          options: {
            presets :  ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}