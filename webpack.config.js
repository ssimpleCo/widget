const path = require('path');

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src', 'ssimpleSdk.js'),
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'ssimpleSdk.js'
	},
};