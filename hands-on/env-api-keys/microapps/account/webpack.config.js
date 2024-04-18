const path = require('path')
const dependencies = require('../package.json').dependencies
const AliasConfig = require('../alias.config')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

// Set the common config
const commonConfig = {
	mode: 'development',
	entry: './account/src/entry.js',
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
		path: path.resolve(__dirname, `../dist/account`),
		filename: 'account.[contenthash].bundle.js',
		publicPath: 'auto',
		clean: true,
	},
	devServer: {
		open: '/microapps/account/',
		compress: true,
		hot: true,
		port: 3002,
		historyApiFallback: {
			disableDotRule: true,
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './account/src/index.html',
			publicPath: '/',
		}),
		new ModuleFederationPlugin({
			name: 'AccountApp',
			filename: 'remoteEntry.js',
			exposes: {
				'./Account': './account/src/App.jsx',
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
	],
}

module.exports = commonConfig
