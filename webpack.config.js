const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";
var TsConfigPathsPlugin =
	require("awesome-typescript-loader").TsConfigPathsPlugin;

module.exports = {
	entry: "./src/index.tsx",
	devtool: "inline-source-map",
	devServer: {
		historyApiFallback: true,
	},
	resolve: {
		extensions: [".ts", ".js", ".json", ".tsx"],
		plugins: [new TsConfigPathsPlugin()],
	},
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "bundle.min.js",
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "awesome-typescript-loader",
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					devMode ? "style-loader" : MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
					"sass-loader",
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: "[name].css",
			chunkFilename: "[id].css",
		}),
	],
};
