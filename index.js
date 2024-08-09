import eslintConfig from './config/eslint.js';
import arrayFuncConfig from './config/array-func.js';
import eslintCommentsConfig from './config/eslint-comments.js';
import globals from './config/globals.js';
import importConfig from './config/import.js';
import lambdaConfig from './config/lambda.js';
import nodeConfig from './config/node.js';
import optimizeRegexConfig from './config/optimize-regex.js';
import regexpConfig from './config/regexp.js';
import securityConfig from './config/security.js';
import sonarJsConfig from './config/sonarjs.js';
import stylisticConfig from './config/stylistic.js';
import unicornConfig from './config/unicorn.js';
import vueConfig from './config/vue.js';
import yamlConfig from './config/yaml.js';

export default [
  eslintConfig,
  arrayFuncConfig,
  eslintCommentsConfig,
  importConfig,
  nodeConfig,
  optimizeRegexConfig,
  regexpConfig,
  securityConfig,
  stylisticConfig,
  sonarJsConfig,
  unicornConfig,
  ...vueConfig, // exports an array
  ...yamlConfig, // exports an array
  ...lambdaConfig, // exports an array and should be last - rules are overrides
  {
    languageOptions: {
      sourceType: 'module',
      globals,
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
