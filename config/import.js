import plugin from 'eslint-plugin-import';

import rules from '../rules/import.js';

export default {
  name: 'simplesense/import',
  plugins: {
    import: plugin,
  },
  rules,
  // ERROR: parserPath or languageOptions.parser is required!
  // see https://github.com/import-js/eslint-plugin-import/issues/2556
  languageOptions: {
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  settings: {
    'import/parsers': {
      espree: ['.js'],
    },
    'import/resolver': {
      node: true,
    },
  },
};
