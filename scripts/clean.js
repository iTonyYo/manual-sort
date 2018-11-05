const trash          = require('trash');
const { resolveApp } = require('./util');

trash([
  resolveApp('esm.js'),
  resolveApp('esm-sync.js'),

  resolveApp('umd.js'),
  resolveApp('umd-sync.js'),

  resolveApp('.nyc_output'),
  resolveApp('.eslintcache'),
  resolveApp('coverage'),
]);
