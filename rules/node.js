(() => {
  'use strict';

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
    'n/no-deprecated-api': ['error'],
    'n/no-missing-import': ['error'],
    'n/no-missing-require': ['error'],
    'n/no-mixed-requires': [
      'error', {
        allowCall: true,
        grouping: true,
      },
    ],
    'n/no-new-require': ['error'],
    'n/no-path-concat': ['error'],
    'n/no-unsupported-features/es-builtins': ['error'],
    'n/no-unsupported-features/es-syntax': ['off'],
    'n/no-unsupported-features/node-builtins': ['error'],
    'n/no-unpublished-bin': ['error'],
    'n/no-unpublished-import': ['error'],
    'n/no-unpublished-require': ['error'],
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
