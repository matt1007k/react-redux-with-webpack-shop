var path = require('path');

var webpack = require('webpack');
var HtmlWebPackPlugin = require('html-webpack-plugin');


module.exports = {
	entry: './src/app.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	},
	watch: true,
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html$/,
				use: {
					loader: "html-loader"
				}
			}  
			  
		]
	 },
	 devServer: {
		contentBase: "./public"
	},
	 plugins: [
		 new HtmlWebPackPlugin({
			 template: "./public/index.html",
			 filename: "./index.html"
		 })
	 ]
	 
	
};