const trash          = require('trash');
const { resolveApp } = require('./util');

trash([
  resolveApp('esm'),
  resolveApp('umd'),
]);
