import simplesenseConfig from './index.js';

export default [
  ...simplesenseConfig,
  {
    ignores: [ 'docs/.vitepress/cache/', 'dist/' ],
  },
];
