(() => {
  'use strict';

  const packageLockJson = require('../package-lock.json');

  function generateTitle(string, packageName) {
    return `${ string } v${ packageLockJson.dependencies[packageName].version }`;
  }

  const CONFIG = {
    'array-func': {
      title: generateTitle('Array Function', 'eslint-plugin-array-func'),
      directory: 'array-func',
      sourceType: 'static',
    },
    default: {
      title: generateTitle('ESLint Recommended', 'eslint'),
      group: 'eslint',
      project: 'eslint',
      directory: 'eslint-recommended',
      sourceType: 'github',
    },
    'eslint-comments': {
      title: generateTitle('ESLint Comments', 'eslint-plugin-eslint-comments'),
      group: 'mysticatea',
      project: 'eslint-plugin-eslint-comments',
      directory: 'eslint-comments',
      sourceType: 'github',
    },
    import: {
      title: generateTitle('Import', 'eslint-plugin-import'),
      srcDir: 'eslint-plugin-import/docs/rules',
      dstDir: 'import',
      sourceType: 'modules',
    },
    'no-use-extend-native': {
      title: generateTitle('No Use Extend Native', 'eslint-plugin-no-use-extend-native'),
      group: 'dustinspecker',
      project: 'eslint-plugin-no-use-extend-native',
      directory: 'no-use-extend-native',
      sourceType: 'github',
    },
    node: {
      title: generateTitle('Node', 'eslint-plugin-node'),
      group: 'mysticatea',
      project: 'eslint-plugin-node',
      directory: 'node',
      sourceType: 'github',
    },
    'optimize-regex': {
      title: generateTitle('Optimize Regex', 'eslint-plugin-optimize-regex'),
      srcDir: 'eslint-plugin-optimize-regex/docs/rules',
      dstDir: 'optimize-regex',
      sourceType: 'modules',
    },
    regexp: {
      title: generateTitle('RegExp', 'eslint-plugin-regexp'),
      group: 'ota-meshi',
      project: 'eslint-plugin-regexp',
      directory: 'regexp',
      sourceType: 'github',
    },
    security: {
      title: generateTitle('Security', 'eslint-plugin-security'),
      directory: 'security',
      sourceType: 'static',
    },
    sonarjs: {
      title: generateTitle('SonarJS', 'eslint-plugin-sonarjs'),
      group: 'SonarSource',
      project: 'eslint-plugin-sonarjs',
      directory: 'sonarjs',
      sourceType: 'github',
    },
    unicorn: {
      title: generateTitle('Unicorn', 'eslint-plugin-unicorn'),
      group: 'sindresorhus',
      project: 'eslint-plugin-unicorn',
      directory: 'unicorn',
      sourceType: 'github',
    },
    vue: {
      title: generateTitle('VueJS', 'eslint-plugin-vue'),
      group: 'vuejs',
      project: 'eslint-plugin-vue',
      directory: 'vue',
      sourceType: 'github',
    },
    yml: {
      title: generateTitle('YAML', 'eslint-plugin-yml'),
      group: 'ota-meshi',
      project: 'eslint-plugin-yml',
      directory: 'yml',
      sourceType: 'github',
    },
  };

  module.exports = { CONFIG };
})();
