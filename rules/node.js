(() => {
  'use strict';

  const path = require('path');

  const NODE_VERSION = '>=16.0.0';
  const ROOT_DIR = path.resolve(__dirname, '../../../'); // this will be in <PROJECT>/node_modules/eslint-config-simplesense/rules/

  module.exports = {
    'n/callback-return': [
      'error', [
        'callback',
        'cb',
        'done',
        'next',
      ],
    ],
    // not used because it does not support IIFE
    // 'n/global-require': ['error'],
    'n/handle-callback-err': ['error'],
    'n/no-deprecated-api': [
      'error', {
        version: NODE_VERSION,
      },
    ],
    'n/no-missing-import': ['error'],
    'n/no-missing-require': [
      'error', {
        allowModules: ['aws-sdk'],
        resolvePaths: [path.resolve(__dirname, `${ ROOT_DIR }/lambda/layers/node-modules/nodejs/node_modules`)],
      },
    ],
    'n/no-mixed-requires': [
      'error', {
        allowCall: true,
        grouping: true,
      },
    ],
    'n/no-new-require': ['error'],
    'n/no-path-concat': ['error'],
    'n/no-unsupported-features/es-builtins': [
      'error', {
        version: NODE_VERSION,
      },
    ],
    'n/no-unsupported-features/es-syntax': ['off'],
    'n/no-unsupported-features/node-builtins': [
      'error', {
        version: NODE_VERSION,
      },
    ],
    'n/no-unpublished-bin': ['error'],
    'n/no-unpublished-import': ['error'],
    'n/no-unpublished-require': [
      'error', {
        convertPath: {
          [`${ path.relative(ROOT_DIR, '/opt/nodejs') }/*`]: [ '^(.*?)/opt/nodejs/(.*?)$', 'lambda/layers/$2/nodejs/$2' ],
        },
      },
    ],
    'n/prefer-global/buffer': [ 'error', 'always' ],
    'n/prefer-global/console': [ 'error', 'always' ],
    'n/prefer-global/process': [ 'error', 'always' ],
    'n/prefer-global/text-decoder': [ 'error', 'never' ],
    'n/prefer-global/text-encoder': [ 'error', 'never' ],
    'n/prefer-global/url-search-params': [ 'error', 'never' ],
    'n/prefer-global/url': [ 'error', 'never' ],
    'n/prefer-promises/dns': ['error'],
    'n/prefer-promises/fs': ['error'],
  };
})();
