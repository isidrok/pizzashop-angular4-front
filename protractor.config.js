process.env.BABEL_ENV = 'e2e';
require('babel-register');

exports.config = {
  directConnect: true,
  capabilities: {
    browserName: 'chrome',
  },
  framework: 'jasmine',
  specs: ['**/*e2e-spec.js'],
  useAllAngular2AppRoots: true,
  baseUrl: 'http://localhost:8081',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 10000,
    showTiming: true,
  },
};
