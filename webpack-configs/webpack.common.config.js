const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const TEMPLATE_NAMES = ['home', 'product', 'login', 'register', 'search', 'category', 'message', 'cart'];

function createEntry() {
	return TEMPLATE_NAMES.reduce((entry, templateName) => ({
		...entry,
		[templateName]: `./${templateName}/${templateName}.js`,
	}), {});
}

function createHtmlWebpackPlugins() {
	return TEMPLATE_NAMES.map((templateName) => new HtmlWebpackPlugin({
		template: `./${templateName}/${templateName}.html`,
		filename: `${templateName}.html`,
		chunks: [templateName],
		minify: false,
	}));
}

module.exports = {
	context: path.resolve(__dirname, '../src/templates/'),
	entry: createEntry(),
	optimization: {
		splitChunks: {
			chunks: 'all',
			minSize: 1024 * 2,
		},
	},
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: 'html-loader',
				options: {
					minimize: false,
					sources: {
						list: [
							'...',
							{
								tag: 'svg',
								attribute: 'data-src',
								type: 'src',
							},
						],
					},
				},
			},
		],
	},
	plugins: [
		...createHtmlWebpackPlugins(),
	],
};
