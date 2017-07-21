const path = require('path'),
	  ExtractTextPlugin = require('extract-text-webpack-plugin'),
	  webpack = require('webpack');

const extractPlugin = new ExtractTextPlugin({
	filename: 'main.css'
});

const DIST_DIR = path.resolve(__dirname, 'dist'),
	  SRC_DIR = path.resolve(__dirname, 'src');


let config = {
	entry: SRC_DIR +'/app/CoinAppRoot.js',
	output: {
		path: DIST_DIR + '/app',
		filename: 'bundle.js',
		publicPath: '/app/'
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				include: SRC_DIR,
				loader: "babel-loader",
				exclude: /node_modules/,
				query: {
					presets: ["react", "es2015", "stage-2"]
				}
			},
			{
				test: /\.css$/,
				loader: extractPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
			}


		]
	},
	plugins: [
		extractPlugin
	]
};

module.exports = config;