const execa = require('execa');

const { resolveApp } = require('./util');
const scriptsDir = resolveApp('scripts');

execa('node', [
  `${scriptsDir}/clean-built.js`
]);

execa('node', [
  `${scriptsDir}/clean-reports.js`
]);

execa('node', [
  `${scriptsDir}/clean-cache.js`
]);
