// prettier-ignore
const presets = [
	[
		'@babel/preset-env',
		{
			targets: {
				edge   : '17',
				ie     : '11',
				firefox: '50',
				chrome : '64',
				safari : '11.1',
			},
			useBuiltIns: 'entry',
			corejs: 3,
		},
	],
	'@babel/preset-typescript',
	['@babel/preset-react', { runtime: 'automatic' }],
];

const plugins = [['@babel/plugin-proposal-decorators', { version: 'legacy' }]];

const babelConfig = { presets, plugins };

export default babelConfig;
