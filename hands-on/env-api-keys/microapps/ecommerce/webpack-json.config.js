const path = require('path')
const webpack = require('webpack')
const AliasConfig = require('../alias.config')

const HtmlWebpackPlugin = require('html-webpack-plugin')

// Set the common config
const commonConfig = {
	mode: 'development',
	entry: './ecommerce/src/index.js',
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
				test: /\.css$/i,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
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
		path: path.resolve(__dirname, `../dist/ecommerce`),
		filename: '[name].[contenthash].bundle.js',
		publicPath: '/ecommerce',
		clean: true,
	},
	devServer: {
		open: '/microapps/products',
		compress: true,
		hot: true,
		port: 3001,
		historyApiFallback: {
			disableDotRule: true,
		},
	},
	optimization: {
		chunkIds: false,
		moduleIds: false,
		usedExports: 'global',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,

					// cacheGroupKey here is `vendor` as the key of the cacheGroup
					name(module, chunks, cacheGroupKey) {
						const moduleFileName =
							module
								.identifier()
								.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/) || []
						//const allChunksNames = chunks.map((item) => item.name).join('~')
						return `${cacheGroupKey}-${moduleFileName[1] || ''}`.replace(
							'@',
							''
						)
					},
					chunks: 'all',
				},
			},
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './webpack-json.html',
			inject: false,
			hash: true,
			chunks: 'ecommerce',
			filename: `./ecommerce.json`,
		}),
		new webpack.ids.DeterministicChunkIdsPlugin({
			maxLength: 5,
		}),
		new webpack.ids.DeterministicModuleIdsPlugin({
			maxLength: 5,
		}),
	],
}

module.exports = commonConfig
