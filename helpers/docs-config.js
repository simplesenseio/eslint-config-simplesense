(() => {
  'use strict';

  const packageLockJson = require('../package-lock.json');

  function generateTitle(string, version) {
    return `${ string } v${ version }`;
  }

  function getVersion(packageName) {
    return packageLockJson.dependencies[packageName].version;
  }

  function getMetadata(title, packageName) {
    const version = getVersion(packageName);

    return {
      title: generateTitle(title, version),
      version,
    };
  }

  const CONFIG = {
    'array-func': {
      ...getMetadata('Array Function', 'eslint-plugin-array-func'),
      directory: 'array-func',
      sourceType: 'static',
    },
    default: {
      ...getMetadata('ESLint Recommended', 'eslint'),
      group: 'eslint',
      project: 'eslint',
      directory: 'eslint-recommended',
      sourceType: 'github',
      rulesPrefix: 'src',
    },
    '@eslint-community/eslint-comments': {
      ...getMetadata('ESLint Comments', '@eslint-community/eslint-plugin-eslint-comments'),
      group: 'eslint-community',
      project: 'eslint-plugin-eslint-comments',
      directory: '@eslint-community/eslint-comments',
      sourceType: 'github',
    },
    import: {
      ...getMetadata('Import', 'eslint-plugin-import'),
      srcDir: 'eslint-plugin-import/docs/rules',
      dstDir: 'import',
      sourceType: 'modules',
    },
    'no-use-extend-native': {
      ...getMetadata('No Use Extend Native', 'eslint-plugin-no-use-extend-native'),
      group: 'dustinspecker',
      project: 'eslint-plugin-no-use-extend-native',
      directory: 'no-use-extend-native',
      sourceType: 'github',
    },
    n: {
      ...getMetadata('Node', 'eslint-plugin-n'),
      group: 'eslint-community',
      project: 'eslint-plugin-n',
      directory: 'n',
      sourceType: 'github',
    },
    'optimize-regex': {
      ...getMetadata('Optimize Regex', 'eslint-plugin-optimize-regex'),
      srcDir: 'eslint-plugin-optimize-regex/docs/rules',
      dstDir: 'optimize-regex',
      sourceType: 'modules',
    },
    regexp: {
      ...getMetadata('RegExp', 'eslint-plugin-regexp'),
      group: 'ota-meshi',
      project: 'eslint-plugin-regexp',
      directory: 'regexp',
      sourceType: 'github',
    },
    security: {
      ...getMetadata('Security', 'eslint-plugin-security'),
      srcDir: 'eslint-plugin-security/docs/rules',
      dstDir: 'security',
      sourceType: 'modules',
    },
    sonarjs: {
      ...getMetadata('SonarJS', 'eslint-plugin-sonarjs'),
      group: 'SonarSource',
      project: 'eslint-plugin-sonarjs',
      directory: 'sonarjs',
      sourceType: 'github',
    },
    unicorn: {
      ...getMetadata('Unicorn', 'eslint-plugin-unicorn'),
      group: 'sindresorhus',
      project: 'eslint-plugin-unicorn',
      directory: 'unicorn',
      sourceType: 'github',
    },
    vue: {
      ...getMetadata('VueJS', 'eslint-plugin-vue'),
      group: 'vuejs',
      project: 'eslint-plugin-vue',
      directory: 'vue',
      sourceType: 'github',
    },
    yml: {
      ...getMetadata('YAML', 'eslint-plugin-yml'),
      group: 'ota-meshi',
      project: 'eslint-plugin-yml',
      directory: 'yml',
      sourceType: 'github',
    },
  };

  module.exports = {
    CONFIG,
  };
})();
