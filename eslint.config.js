(() => {
  'use strict';

  module.exports = [
    ...require('./index'),
    {
      files: [
        '*.mjs',
        '**/*.mjs',
      ],
      languageOptions: {
        sourceType: 'module',
      },
    },
    {
      ignores: [
        'docs/.vitepress/cache/',
        'dist/',
      ],
    },
  ];
})();
