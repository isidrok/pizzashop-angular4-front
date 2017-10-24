import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import replace from 'rollup-plugin-replace';
import config from './rollup.config.js';

const plugins = config.plugins;
plugins.pop();
plugins[0] = replace({
  exclude: 'node_modules/**',
  ENVIRONMENT: JSON.stringify('development'),
});
plugins.unshift(
  serve({
    contentBase: '',
    port: 8080,
    open: true,
  }),
  livereload({
    watch: 'dist',
  })
);
export default config;
