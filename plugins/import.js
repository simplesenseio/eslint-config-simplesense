(() => {
  'use strict';

  // const path = require('path');

  // const ROOT_DIR = path.resolve(__dirname, '../../../');

  module.exports = {
    'import/default': ['error'],
    'import/export': ['error'],
    'import/exports-last': ['error'],
    'import/first': ['error'],
    'import/group-exports': ['error'],
    'import/named': ['error'],
    'import/namespace': ['error'],
    'import/no-amd': ['error'],
    'import/no-cycle': [
      'error', {
        commonjs: true,
      },
    ],
    'import/no-deprecated': ['error'],
    'import/no-duplicates': ['error'],
    'import/no-dynamic-require': ['error'],
    // There is an open merge that needs to happen before we can change this rule: https://github.com/import-js/eslint-plugin-import/pull/1954
    'import/no-extraneous-dependencies': 'error', // [ 'error', { packageDir: [ ROOT_DIR, `${ ROOT_DIR }/lambda/layers/node-modules/nodejs` ]}],
    'import/no-named-as-default-member': ['error'],
    'import/no-named-default': ['error'],
    'import/no-self-import': ['error'],
    'import/no-unassigned-import': [
      'error', {
        allow: [
          '**/*.css',
          '**/*.sass',
          '**/*.scss',
        ],
      },
    ],
    'import/no-useless-path-segments': [
      'error', {
        commonjs: true,
      },
    ],
    'import/order': [
      'error', {
        groups: [
          'builtin',
          'external',
          'internal',
          'unknown',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
  };
})();
