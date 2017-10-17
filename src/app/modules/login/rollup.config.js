import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import cssnext from 'postcss-cssnext';
import easyimport from 'postcss-easy-import';
import cssnano from 'cssnano';
import url from 'postcss-url';
import string from 'rollup-plugin-string';
import replace from 'rollup-plugin-replace';
const pkg = require('./package.json');

const globals = {
  'pizzashop': 'pizzashop',
  '@angular/animations': '',
  '@angular/cdk': '',
  '@angular/common': '',
  '@angular/common/http': '',
  '@angular/compiler': '',
  '@angular/core': '',
  '@angular/forms': '',
  '@angular/http': '',
  '@angular/platform-browser': '',
  '@angular/platform-browser/animations': '',
  '@angular/platform-browser-dynamic': '',
  '@angular/router': '',
  '@angular/material': '',
};

export default {
  input: pkg['jsnext:main'],
  output: {
    file: pkg['main:min'],
    format: 'umd',
  },
  sourcemap: true,
  name: pkg.namespace,
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
          url: 'inline',
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
