import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { TsConfigPathsPlugin } from 'awesome-typescript-loader';
import Dotenv from 'dotenv-webpack';
const devMode = process.env.MODE !== 'production';

export const mainConfig = {
	entry: './src/index.tsx',
	devtool: devMode ? 'source-map' : 'inline-source-map',
	resolve: {
		extensions: ['.ts', '.js', '.json', '.tsx'],
		plugins: [new TsConfigPathsPlugin() as any],
	},
	output: {
		path: path.join(__dirname, '../build'),
		filename: 'main.min.js',
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)?$/,
				loader: 'ts-node',
			},
			{
				test: /\.(js|jsx)?$/,
				loader: 'babel-loader',
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),
		new Dotenv(),
	],
};
