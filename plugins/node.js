(() => {
  'use strict';

  const path = require('path');

  const NODE_VERSION = '>=14.0.0';
  const ROOT_DIR = path.resolve(__dirname, '../../../');

  module.exports = {
    'node/callback-return': [
      'error', [
        'callback',
        'cb',
        'done',
        'next',
      ],
    ],
    // not used because it does not support IIFE
    // 'node/global-require': ['error'],
    'node/handle-callback-err': ['error'],
    'node/no-deprecated-api': [
      'error', {
        version: NODE_VERSION,
      },
    ],
    'node/no-missing-import': ['error'],
    'node/no-missing-require': [
      'error', {
        allowModules: ['aws-sdk'],
        resolvePaths: [path.resolve(__dirname, `${ ROOT_DIR }/lambda/layers/node-modules/nodejs/node_modules`)],
      },
    ],
    'node/no-mixed-requires': [
      'error', {
        allowCall: true,
        grouping: true,
      },
    ],
    'node/no-new-require': ['error'],
    'node/no-path-concat': ['error'],
    'node/no-unsupported-features/es-builtins': [
      'error', {
        version: NODE_VERSION,
      },
    ],
    'node/no-unsupported-features/es-syntax': ['off'],
    'node/no-unsupported-features/node-builtins': [
      'error', {
        version: NODE_VERSION,
      },
    ],
    'node/no-unpublished-bin': ['error'],
    'node/no-unpublished-import': ['error'],
    'node/no-unpublished-require': [
      'error', {
        convertPath: {
          [`${ path.relative(ROOT_DIR, '/opt/nodejs') }/*`]: [ '^(.*?)/opt/nodejs/(.*?)$', 'lambda/layers/$2/nodejs/$2' ],
        },
      },
    ],
    'node/prefer-global/buffer': [ 'error', 'always' ],
    'node/prefer-global/console': [ 'error', 'always' ],
    'node/prefer-global/process': [ 'error', 'always' ],
    'node/prefer-global/text-decoder': [ 'error', 'never' ],
    'node/prefer-global/text-encoder': [ 'error', 'never' ],
    'node/prefer-global/url-search-params': [ 'error', 'never' ],
    'node/prefer-global/url': [ 'error', 'never' ],
    'node/prefer-promises/dns': ['error'],
    'node/prefer-promises/fs': ['error'],
  };
})();
