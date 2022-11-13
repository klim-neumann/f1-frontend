const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'production',
	devtool: 'source-map',
	output: {
		clean: true,
		filename: './js/[name].[contenthash].js',
	},
	module: {
		rules: [
			{
				test: /\.(jpe?g|png|svg)/i,
				type: 'asset/resource',
				generator: {
					filename: 'img/[name].[contenthash][ext]',
				},
			},
			{
				test: /\.css$/i,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
						},
					},
					'postcss-loader',
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: './css/[name].[contenthash].css',
		}),
	],
};
