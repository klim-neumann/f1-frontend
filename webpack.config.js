const { merge } = require('webpack-merge');

const common = require('./webpack-configs/webpack.common.config');
const dev = require('./webpack-configs/webpack.dev.config');
const prod = require('./webpack-configs/webpack.prod.config');

module.exports = (env) => {
	let config;

	switch (env.MODE) {
		case 'development':
			config = dev;
			break;
		case 'production':
			config = prod;
			break;
		default:
			throw new Error('No matching configuration was found');
	}

	return merge(common, config);
};
