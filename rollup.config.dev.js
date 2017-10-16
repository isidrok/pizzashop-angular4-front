import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import replace from 'rollup-plugin-replace';
import config from './rollup.config.nomin.js';

const {plugins} = config;

config.output = config.output[0];
plugins[0] = replace({
  exclude: 'node_modules/**',
  ENVIRONMENT: JSON.stringify('development'),
});
plugins.unshift(
  serve({
    contentBase: '',
    port: 8080,
  }),
  livereload({
    watch: 'dist',
  })
);
export default config;
