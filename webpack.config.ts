import * as webpack from 'webpack';
import 'webpack-dev-server';

import { devServer, mainConfig } from './webpack';

const config: webpack.Configuration = {
	...mainConfig,
	devServer,
};

export default config;
