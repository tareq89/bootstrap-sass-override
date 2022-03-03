const path = require('path');

module.exports = {
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	entry: ['./src/index.js', './src/index.scss'],
	output: {
		path: path.resolve(__dirname, 'assets'),
		filename: 'js/editor.blocks.js',
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'css/[name].css',
						}
					},
					{
						loader: 'extract-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'postcss-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	}
};