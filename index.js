(() => {
  'use strict';

  const globals = require('globals');

  // remove this and the core-js dependency
  // when we drop support for node 16
  if (!('structuredClone' in globalThis)) {
    // eslint-disable-next-line import/no-unassigned-import
    require('core-js/actual');
  }

  module.exports = [
    require('./config/eslint'),
    require('./config/array-func'),
    require('./config/eslint-comments'),
    require('./config/import'),
    require('./config/no-use-extend-native'),
    require('./config/node'),
    require('./config/optimize-regex'),
    require('./config/regexp'),
    require('./config/security'),
    require('./config/sonarjs'),
    require('./config/unicorn'),
    ...require('./config/vue'), // exports an array
    ...require('./config/yaml'), // exports an array
    {
      languageOptions: {
        sourceType: 'commonjs',
        globals: {
          ...globals.browser,
          ...globals.es2021,
          ...globals.es6,
          ...globals.jest,
          ...globals.node,
          spyFn: true,
        },
      },
    },
    {
      // it's a bit confusing, but this needs to be in a config all by itself
      // https://github.com/eslint/eslint/issues/17400
      ignores: [
        '!.*',
        '.cache/',
        '.git/',
        '.github/actions/',
        '.npm/',
        'coverage/',
        'lib-cov/',
        'node_modules/',
        '**/*.min.*',
      ],
    },
  ];
})();
