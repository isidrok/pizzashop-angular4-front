import replace from 'rollup-plugin-replace';
import config from './rollup.config.nomin.js';

const {plugins} = config;

config.output = config.output[0];
plugins[0] = replace({
  exclude: 'node_modules/**',
  ENVIRONMENT: JSON.stringify('development'),
});
export default config;
