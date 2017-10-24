import replace from 'rollup-plugin-replace';
import config from './rollup.config.js';

const plugins = config.plugins;
plugins.pop();
plugins[0] = replace({
  exclude: 'node_modules/**',
  ENVIRONMENT: JSON.stringify('development'),
});
export default config;
