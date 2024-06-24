import simplesenseConfig from './index.js';

export default [
  ...simplesenseConfig,
  // {
  //   files: [
  //     '*.mjs',
  //     '**/*.mjs',
  //   ],
  //   languageOptions: {
  //     sourceType: 'module',
  //   },
  // },
  {
    ignores: [
      'docs/.vitepress/cache/',
      'dist/',
    ],
  },
];
