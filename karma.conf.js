module.exports = function(config) {
  const appBase = 'src/';
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-rollup-preprocessor'),
    ],
    client: {
      builtPaths: [appBase],
      clearContext: false,
    },
    files: [
      // zone.js
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/long-stack-trace-zone.js',
      'node_modules/zone.js/dist/proxy.js',
      'node_modules/zone.js/dist/sync-test.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',
      // reflect-metadata
      'node_modules/reflect-metadata/Reflect.js',
      // tests
      {pattern: appBase + '**/*.spec.js', watched: true},
    ],
    exclude: [],
    preprocessors: {
      'src/**/*.spec.js': ['rollup'],
    },
    rollupPreprocessor: {
      format: 'iife',
      name: 'AngularTesting',
      plugins: [
        require('rollup-plugin-string')({
          include: '**/*.html',
        }),
        require('rollup-plugin-postcss')(),
        require('rollup-plugin-node-resolve')(),
        require('rollup-plugin-commonjs')({
          include: 'node_modules/**',
        }),
        require('rollup-plugin-babel')({
          exclude: [
            'node_modules/**',
          ],
        }),
      ],
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
  });
};
