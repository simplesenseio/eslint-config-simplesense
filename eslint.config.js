import simplesenseConfig from './index.js';

export default [
  ...simplesenseConfig,
  {
    files: [ '*.vue', '**/*.vue' ],
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          case: 'pascalCase',
          checkDirectories: false,
        },
      ],
    },
  },
  {
    ignores: [ 'docs/.vitepress/cache/', 'dist/' ],
  },
];
