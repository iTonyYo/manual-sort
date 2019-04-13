import { join } from 'path';

module.exports = {
  mode: 'production',
  entry: {
    'manual-sort': './esm/manual-sort.js',
    'manual-sort-sync': './esm/manual-sort-sync.js',
  },
  output: {
    path: join(__dirname, 'umd'),
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  externals: {
    'lodash/slice': {
      commonjs: 'lodash/slice',
      commonjs2: 'lodash/slice',
      amd: 'lodash/slice',
    },
    'lodash/concat': {
      commonjs: 'lodash/concat',
      commonjs2: 'lodash/concat',
      amd: 'lodash/concat',
    },
    'lodash/isArray': {
      commonjs: 'lodash/isArray',
      commonjs2: 'lodash/isArray',
      amd: 'lodash/isArray',
    },
    'lodash/isEmpty': {
      commonjs: 'lodash/isEmpty',
      commonjs2: 'lodash/isEmpty',
      amd: 'lodash/isEmpty',
    },
    'lodash/forEach': {
      commonjs: 'lodash/forEach',
      commonjs2: 'lodash/forEach',
      amd: 'lodash/forEach',
    },
    'lodash/merge': {
      commonjs: 'lodash/merge',
      commonjs2: 'lodash/merge',
      amd: 'lodash/merge',
    },
    'lodash/size': {
      commonjs: 'lodash/size',
      commonjs2: 'lodash/size',
      amd: 'lodash/size',
    },
    'lodash/times': {
      commonjs: 'lodash/times',
      commonjs2: 'lodash/times',
      amd: 'lodash/times',
    },
    'lodash/stubObject': {
      commonjs: 'lodash/stubObject',
      commonjs2: 'lodash/stubObject',
      amd: 'lodash/stubObject',
    },
    'lodash/stubArray': {
      commonjs: 'lodash/stubArray',
      commonjs2: 'lodash/stubArray',
      amd: 'lodash/stubArray',
    },
    'lodash/get': {
      commonjs: 'lodash/get',
      commonjs2: 'lodash/get',
      amd: 'lodash/get',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader',
      },
    ],
  },
};
