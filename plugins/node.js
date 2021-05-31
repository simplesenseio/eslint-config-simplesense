(() => {
  'use strict';

  const NODE_VERSION = '>=14.0.0';

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
    'node/no-deprecated-api': [ 'error', { version: NODE_VERSION }],
    'node/no-missing-import': ['error'],
    'node/no-missing-require': ['error'],
    'node/no-mixed-requires': [ 'error', { allowCall: true, grouping: true }],
    'node/no-new-require': ['error'],
    'node/no-path-concat': ['error'],
    'node/no-unsupported-features/es-builtins': [ 'error', { version: NODE_VERSION }],
    'node/no-unsupported-features/es-syntax': [ 'error', { version: NODE_VERSION }],
    'node/no-unsupported-features/node-builtins': [ 'error', { version: NODE_VERSION }],
    'node/no-unpublished-bin': ['error'],
    'node/no-unpublished-import': ['error'],
    'node/no-unpublished-require': ['error'],
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
