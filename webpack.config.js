const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.join(__dirname, 'src'),
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'app.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: ['babel-loader'],
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new HtmlPlugin({
			template: './src/index.html',
			inject: true,
			filename: 'index.html'
		})
	],
	devtool: 'source-maps'

}