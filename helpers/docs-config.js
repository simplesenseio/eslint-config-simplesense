import {
  readFile,
} from 'node:fs/promises';
import path from 'node:path';
import {
  fileURLToPath,
} from 'node:url';

const DIRNAME = path.dirname(fileURLToPath(import.meta.url));
// without assert we get
// TypeError [ERR_IMPORT_ASSERTION_TYPE_MISSING]: Module "file:///some/path/eslint-config-simplesense/package-lock.json" needs an import assertion of type "json"
// with assert we get
// Parsing error: Unexpected token assert
// import packageLockJson from '../package-lock.json' assert { type: "json" };
// do this silly workaroudn for now
const packageLockJson = JSON.parse((await readFile(path.resolve(DIRNAME, '../package-lock.json'))).toString());

function generateTitle(string, version) {
  return `${ string } v${ version }`;
}

function getVersion(packageName) {
  return packageLockJson.packages[`node_modules/${ packageName }`].version;
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
    ruleDenyList: [],
  },
  default: {
    ...getMetadata('ESLint Recommended', 'eslint'),
    group: 'eslint',
    project: 'eslint',
    directory: 'eslint-recommended',
    sourceType: 'github',
    rulesPrefix: 'src',
    ruleDenyList: [],
  },
  '@eslint-community/eslint-comments': {
    ...getMetadata('ESLint Comments', '@eslint-community/eslint-plugin-eslint-comments'),
    group: 'eslint-community',
    project: 'eslint-plugin-eslint-comments',
    directory: '@eslint-community/eslint-comments',
    sourceType: 'github',
    ruleDenyList: [],
  },
  '@stylistic/js': {
    ...getMetadata('ESLint Stylistic', '@stylistic/eslint-plugin-js'),
    group: 'eslint-stylistic',
    project: 'eslint-stylistic',
    directory: '@stylistic/js',
    sourceType: 'github',
    githubDocsPath: 'packages/eslint-plugin',
    githubRuleFilename: 'README._js_.md',
    ruleDenyList: ['func-call-spacing'],
  },
  import: {
    ...getMetadata('Import', 'eslint-plugin-import'),
    srcDir: 'eslint-plugin-import/docs/rules',
    dstDir: 'import',
    sourceType: 'modules',
    ruleDenyList: [],
  },
  n: {
    ...getMetadata('Node', 'eslint-plugin-n'),
    group: 'eslint-community',
    project: 'eslint-plugin-n',
    directory: 'n',
    sourceType: 'github',
    ruleDenyList: [],
  },
  'optimize-regex': {
    ...getMetadata('Optimize Regex', 'eslint-plugin-optimize-regex'),
    srcDir: 'eslint-plugin-optimize-regex/docs/rules',
    dstDir: 'optimize-regex',
    sourceType: 'modules',
    ruleDenyList: [],
  },
  regexp: {
    ...getMetadata('RegExp', 'eslint-plugin-regexp'),
    group: 'ota-meshi',
    project: 'eslint-plugin-regexp',
    directory: 'regexp',
    sourceType: 'github',
    ruleDenyList: [],
  },
  security: {
    ...getMetadata('Security', 'eslint-plugin-security'),
    srcDir: 'eslint-plugin-security/docs/rules',
    dstDir: 'security',
    sourceType: 'modules',
    ruleDenyList: [],
  },
  sonarjs: {
    ...getMetadata('SonarJS', 'eslint-plugin-sonarjs'),
    group: 'SonarSource',
    project: 'eslint-plugin-sonarjs',
    directory: 'sonarjs',
    sourceType: 'github',
    ruleDenyList: [],
  },
  unicorn: {
    ...getMetadata('Unicorn', 'eslint-plugin-unicorn'),
    group: 'sindresorhus',
    project: 'eslint-plugin-unicorn',
    directory: 'unicorn',
    sourceType: 'github',
    ruleDenyList: [],
  },
  vue: {
    ...getMetadata('VueJS', 'eslint-plugin-vue'),
    group: 'vuejs',
    project: 'eslint-plugin-vue',
    directory: 'vue',
    sourceType: 'github',
    ruleDenyList: [],
  },
  yml: {
    ...getMetadata('YAML', 'eslint-plugin-yml'),
    group: 'ota-meshi',
    project: 'eslint-plugin-yml',
    directory: 'yml',
    sourceType: 'github',
    ruleDenyList: [],
  },
};

export {
  CONFIG,
};
