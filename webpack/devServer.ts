import { Configuration } from 'webpack';
const { PORT, API_URL } = process.env;

export const devServer: Configuration['devServer'] = {
	port: PORT,
	historyApiFallback: true,
	open: false,
	proxy: {
		'/random/**': {
			target: 'https://some-random-api.ml',
			secure: false,
			changeOrigin: true,
			pathRewrite: {
				'/random': '',
			},
		},
		'/api': {
			target: API_URL,
			secure: false,
			changeOrigin: true,
			pathRewrite: {
				'/api': '',
			},
		},
	},
};
