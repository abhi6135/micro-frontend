const path = require('path')
const AliasConfig = require('../alias.config')

const HtmlWebpackPlugin = require('html-webpack-plugin')

// Set the common config
const commonConfig = {
	mode: 'development',
	entry: './src/entry',
	devtool: 'eval-source-map',
	target: 'web',
	module: {
		rules: [
			{
				test: /\.m?js/,
				type: 'javascript/auto',
				resolve: {
					fullySpecified: false,
				},
			},
			{
				test: /\.(js|jsx)$/,
				exclude: [/node_modules/],
				use: [
					{
						loader: 'babel-loader',
						options: {
							cacheDirectory: false,
						},
					},
				],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},

			// Images
			{
				test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
				type: 'asset/resource',
			},
		],
	},
	resolve: {
		// Order of resolution
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.md'],

		// Resolve the mappings
		alias: {
			...AliasConfig.webpack,
		},
	},
	output: {
		path: path.resolve(__dirname, `./dist`),
		filename: '[name].[contenthash].bundle.js',
		publicPath: 'auto',
		clean: true,
	},
	devServer: {
		open: '/',
		compress: true,
		hot: true,
		port: 3000,
		historyApiFallback: {
			disableDotRule: true,
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			publicPath: '/',
		}),
	],
}

module.exports = commonConfig
