(() => {
  'use strict';

  const EXTENDS = {
    'eslint:recommended': require('./plugins/eslint-recommended'),
  };

  const PLUGINS = {
    'array-func': require('./plugins/array-func'),
    import: require('./plugins/import'),
    node: require('./plugins/node'),
    security: require('./plugins/security'),
    sonarjs: require('./plugins/sonarjs'),
    unicorn: require('./plugins/unicorn'),
  };

  module.exports = {
    extends: [
      ...Object.keys(EXTENDS),
      'plugin:eslint-comments/recommended',
      'plugin:no-use-extend-native/recommended',
      'plugin:optimize-regex/recommended',
      'plugin:regexp/recommended',
      'plugin:sonarjs/recommended',
    ],
    plugins: [
      ...Object.keys(PLUGINS),
      'optimize-regex',
      'eslint-comments',
      'no-use-extend-native',
      'regexp',
    ],
    env: {
      browser: true,
      es2021: true,
      es6: true,
      jest: true,
      node: true,
    },
    parserOptions: {
      ecmaVersion: 2021,
    },
    ignorePatterns: [
      '!.*',
      '.cache/',
      '.git/',
      '.github/actions/',
      '.npm/',
      '.nyc_output/',
      'coverage/',
      'lib-cov/',
      'node_modules/',
      '**/*.min.*',
    ],
    rules: [
      ...Object.values(EXTENDS),
      ...Object.values(PLUGINS),
    ].reduce((object, value) => Object.assign(object, value), {}),
    overrides: [
      {
        files: ['*.vue'],
        extends: [
          'plugin:vue/recommended',
          'plugin:vue/strongly-recommended',
          'plugin:vue/essential',
        ],
        plugins: ['vue'],
        rules: {
          'unicorn/filename-case': [
            'error', {
              case: 'pascalCase',
            },
          ],
          'vue/component-name-in-template-casing': [ 'error', 'kebab-case' ],
          'vue/component-definition-name-casing': [ 'error', 'kebab-case' ],
          'vue/singleline-html-element-content-newline': 'off',
        },
      }, {
        files: [ '*.yml', '*.yaml' ],
        extends: ['plugin:yml/standard'],
        plugins: ['yml'],
        rules: {
          'yml/block-sequence': [ 'error', 'always' ],
          'yml/file-extension': [
            'error',
            {
              extension: 'yaml',
              caseSensitive: true,
            },
          ],
          'yml/indent': [
            'error',
            2,
            {
              indentBlockSequences: true,
            },
          ],
          'yml/no-empty-document': ['off'],
          'yml/quotes': [
            'error', {
              prefer: 'single',
            },
          ],
        },
      },
    ],
    globals: {
      spyFn: true,
    },
  };
})();
