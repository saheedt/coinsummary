const path = require('path'),
	MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const extractPlugin = new ExtractTextPlugin({
// 	filename: 'main.css'
// });
const extractPlugin = new MiniCssExtractPlugin({
	filename: 'main.css',
	chunkFilename: 'main-id.css',
	ignoreOrder: false
});

const DIST_DIR = path.resolve(__dirname, 'dist'),
	SRC_DIR = path.resolve(__dirname, 'src');


const config = {
	entry: SRC_DIR +'/app/CoinAppRoot.js',
	output: {
		path: DIST_DIR + '/app',
		filename: 'bundle.js',
		publicPath: '/app/'
	},
	externals: {
    	cheerio: 'window',
    	'react/lib/ExecutionEnvironment': true,
    	'react/lib/ReactContext': true,
  	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				include: SRC_DIR,
				exclude: /node_modules/,
				// options:{
				// 	query: {
				// 		presets: ["@babel/preset-env", "@babel/preset-react"],
				// 		plugins: [
				// 			"@babel/plugin-syntax-dynamic-import",
				// 			"@babel/plugin-syntax-import-meta",
				// 			"@babel/plugin-proposal-class-properties",
				// 			"@babel/plugin-proposal-json-strings",
				// 			[
				// 				"@babel/plugin-proposal-decorators",
				// 				{
				// 					"legacy": true
				// 				}
				// 			],
				// 			"@babel/plugin-proposal-function-sent",
				// 			"@babel/plugin-proposal-export-namespace-from",
				// 			"@babel/plugin-proposal-numeric-separator",
				// 			"@babel/plugin-proposal-throw-expressions"
				// 		]
				// 	}
				// },
				use: {
					loader: "babel-loader",
				}
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					'css-loader'
				]
			}
			// {
			// 	test: /\.css$/,
			// 	loader: extractPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
			// }
		]
	},
	plugins: [
		extractPlugin
	]
};

module.exports = config;