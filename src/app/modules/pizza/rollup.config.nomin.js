import config from './rollup.config.js';
const pkg = require('./package.json');

config.plugins.pop();
config.output = [
  {file: pkg.main, format: 'umd'},
  {file: pkg.module, format: 'es'},
];
export default config;
