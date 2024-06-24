import globals from 'globals';

import eslintConfig from './config/eslint.js';
import arrayFuncConfig from './config/array-func.js';
import eslintCommentsConfig from './config/eslint-comments.js';
import importConfig from './config/import.js';
import noUseExtendNativeConfig from './config/no-use-extend-native.js';
import nodeConfig from './config/node.js';
import optimizeRegexConfig from './config/optimize-regex.js';
import regexpConfig from './config/regexp.js';
import securityConfig from './config/security.js';
import sonarJsConfig from './config/sonarjs.js';
import unicornConfig from './config/unicorn.js';
import vueConfig from './config/vue.js';
import yamlConfig from './config/yaml.js';

// remove this and the core-js dependency
// when we drop support for node 16
// if (!('structuredClone' in globalThis)) {
//   // eslint-disable-next-line import/no-unassigned-import
//   require('core-js/actual');
// }

export default [
  eslintConfig,
  arrayFuncConfig,
  eslintCommentsConfig,
  importConfig,
  noUseExtendNativeConfig,
  nodeConfig,
  optimizeRegexConfig,
  regexpConfig,
  securityConfig,
  sonarJsConfig,
  unicornConfig,
  ...vueConfig, // exports an array
  ...yamlConfig, // exports an array
  {
    languageOptions: {
      sourceType: 'module',
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
