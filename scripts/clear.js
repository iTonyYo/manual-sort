const execa = require('execa');

const { resolveApp } = require('./util');
const scriptsDir = resolveApp('scripts');

execa('node', [
  `${scriptsDir}/clean-built.js`
]);

execa('node', [
  `${scriptsDir}/clear-reports.js`
]);

execa('node', [
  `${scriptsDir}/clean-cache.js`
]);
