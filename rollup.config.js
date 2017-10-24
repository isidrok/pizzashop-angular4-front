import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import url from 'postcss-url';
import cssnext from 'postcss-cssnext';
import easyimport from 'postcss-easy-import';
import cssnano from 'cssnano';
import string from 'rollup-plugin-string';
import replace from 'rollup-plugin-replace';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/pizzashop.umd.js',
    format: 'umd',
  },
  sourcemap: true,
  name: 'pizzashop',
  plugins: [
    replace({
      exclude: 'node_modules/**',
      ENVIRONMENT: JSON.stringify('production'),
    }),
    postcss({
      plugins: [
        easyimport({
          path: 'src/styles',
        }),
        url({
          url: 'rebase',
        }),
        cssnext({
          features: {
            autoprefixer: false,
          },
        }),
        cssnano(),
      ],
    }),
    string({
      include: '**/*.html',
    }),
    nodeResolve(),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      exclude: [
        'node_modules/**',
      ],
    }),
    uglify({
      mangle: {
        keep_fnames: true,
      },
      compress: {
        keep_fnames: true,
      },
    }),
  ],
};
