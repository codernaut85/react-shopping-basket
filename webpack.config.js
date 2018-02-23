'use strict';

const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const path = require("path");

const config = {
	entry: ["./src/index.js", "./src/static/app.scss"],
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "app.js"
	},
	module: {
		rules: [
			{ test: /\.html$/, use: "raw-loader" },
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: {
				presets:['es2015', 'react', 'stage-2']
			}},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "eslint-loader",
				options: {
					// eslint options (if necessary)
					configFile: "eslint.json"
				}
			},
			{
				test: /\.scss$/,
				use: [{
						loader: 'file-loader',
						options: {
							name: 'app.css'
						}
					},
					{
						loader: 'extract-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	},
	plugins: [
		// new UglifyJsPlugin({
		// 	sourceMap: true
		// }),
		new CopyWebpackPlugin([
			{ from: "src/static/index.html", to: path.resolve(__dirname, "dist") }
		])
	]
}

module.exports = config;