const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.pug',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
	rules: [
	  {
		test: /\.pug$/,
		use: ['html-loader?attrs=false', 'pug-html-loader']
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        exclude: /node_modules/,
        use:{
          loader: "file-loader?name=/src/icons/[name].[ext]",
        }
      },
      {
        test: /\.(woff|ttf|svg)$/,
        exclude: [/images/],
        use:{
          loader:'file-loader'
        }
      }
	]
  },
  plugins: [
    new HtmlWebpackPlugin({
	  filename: 'index.html',
	  template:'src/index.pug'
	}),
	new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
}