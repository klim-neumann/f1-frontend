module.exports = {
	extends: ['airbnb-base', 'plugin:editorconfig/all'],
	plugins: ['editorconfig'],
	env: {
		browser: true,
	},
	rules: {
		'editorconfig/indent': ['error', { SwitchCase: 1 }],
		'no-tabs': 0,
	},
	overrides: [
		{
			files: ['./webpack-configs/**/*.js'],
			rules: {
				'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
			},
		},
	],
};
