const path = require('path');

module.exports = {
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	entry: ['./src/index.js', './src/index.scss'],
	watch: true,
	output: {
		path: path.resolve(__dirname, 'assets'),
		filename: 'bundle.js',
	},
	devServer: {
    static: [
      {
        directory: path.join(__dirname, 'assets')
      },
      {
        directory: path.join(__dirname, 'public'),
      },
      {
        directory: path.join(__dirname, 'node_modules'),
      },
    ],
		watchFiles: ['./assets/*', "./src"],
    compress: true,
    port: 9000,
		hot: true,
		open: true
  },
	
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'css/[name].css'
						}
					},
					// {
					// 	loader: 'extract-loader',
					// 	options: {
					// 		esModule: false,
					// 	}
					// },
					// {
					// 	loader: 'css-loader',
					// 	options: {
					// 		sourceMap: true
					// 	}
					// },
					// {
					// 	loader: 'postcss-loader'
					// },
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	}
};