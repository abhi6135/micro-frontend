const path = require('path')
const webpack = require('webpack')

const dependencies = require('../package.json').dependencies
const AliasConfig = require('../alias.config')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = webpack.container

// Get the environment specific env file
require('dotenv').config({
	path: path.resolve(__dirname, `./config/${process.env.NODE_ENV}/.env`),
})

// Set the common config
const commonConfig = {
	mode: 'development',
	entry: './ecommerce/src/entry.js',
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
		publicPath: 'auto',
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
	plugins: [
		new HtmlWebpackPlugin({
			template: './ecommerce/src/index.html',
			publicPath: '/',
		}),
		new ModuleFederationPlugin({
			name: 'EcommerceApp',
			filename: 'remoteEntry.js',
			exposes: {
				'./Ecommerce': './ecommerce/src/App.jsx',
			},
			shared: {
				...dependencies,
				'react': {
					singleton: true,
					requiredVersion: dependencies['react'],
				},
				'react-dom': {
					singleton: true,
					requiredVersion: dependencies['react-dom'],
				},
			},
		}),
		new webpack.DefinePlugin({
			'process.env': JSON.stringify(process.env),
		}),
		new webpack.ids.DeterministicChunkIdsPlugin({
			maxLength: 5,
		}),
		new webpack.ids.DeterministicModuleIdsPlugin({
			maxLength: 5,
		}), // so that file hashes don't change unexpectedly
	],
}

module.exports = commonConfig
