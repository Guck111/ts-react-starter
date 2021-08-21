const path = require('path')
const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")
const Dotenv = require('dotenv-webpack')
const { ProvidePlugin } = require("webpack")

const PATHS = {
	src: path.join(__dirname, '../src'),
	dist: path.join(__dirname, '../dist'),
	assets: 'assets/'
}

const PAGES_DIR = `./public/`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.html'))

module.exports = {
	externals: {
		paths: PATHS
	},
	entry: [`${PATHS.src}/index.tsx`],
	output: {
		filename: `${PATHS.assets}js/[name].js`,
		path: PATHS.dist,
		publicPath: '/'
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					name: 'vendors',
					test: /node_modules/,
					chunks: 'all',
					enforce: true
				}
			}
		}
	},
	module: {
		rules: [{
			test: /\.(ts|js)x?$/,
			loader: 'babel-loader',
			exclude: '/node_modules/'
		}, {
			test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'file-loader',
			options: {
				name: '[name].[ext]'
			}
		}, {
			test: /\.(png|jpg|gif|svg|mp4)$/,
			loader: 'file-loader',
			options: {
				name: '[name].[ext]'
			}
		}, {
			test: /\.css$/,
			use: [
				'style-loader',
				MiniCssExtractPlugin.loader,
				{
					loader: 'css-loader',
					options: { sourceMap: true }
				}, {
					loader: 'postcss-loader',
					options: { sourceMap: true, config: { path: `./postcss.config.js` } }
				}
			]
		}]
	},
	resolve: {
		extensions: ['.js', '.ts', '.tsx'],
		alias: {
			"components": `${PATHS.src}/components`,
			"models": `${PATHS.src}/models`,
		}
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: `${PATHS.assets}css/main.css`,
		}),
		new CopyWebpackPlugin([
			{ from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img` },
			{ from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}css` },
		]),
		...PAGES.map(page => new HtmlWebpackPlugin({
			template: `${PAGES_DIR}/${page}`
		})),
		new ForkTsCheckerWebpackPlugin({
			eslint: {
				files: "./src/**/*.{ts,tsx,js,jsx}",
			},
		}),
		new Dotenv(),
		new ProvidePlugin({
			React: 'react'
		})
	],
}
