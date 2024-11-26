import path from 'node:path';
import {
  execSync,
} from 'node:child_process';
import {
  fileURLToPath,
} from 'node:url';

const DIRNAME = path.dirname(fileURLToPath(import.meta.url));

function getRulesFromFilepath(filepath) {
  // eslint-disable-next-line n/no-sync
  let config = execSync(`npx eslint --print-config ${ filepath }`, {
    cwd: path.resolve(DIRNAME, '../'),
  }).toString();

  config = config
    .replaceAll(path.resolve(DIRNAME, '../../../'), '<root>')
    .replaceAll('../../../opt/nodejs', '/opt/nodejs')
    .replaceAll('../../opt/nodejs', '/opt/nodejs');

  return JSON.parse(config);
}

const ALL_CONFIGS = {
  JS: getRulesFromFilepath(path.resolve(DIRNAME, '../filetypes/index.js')),
  VUE: getRulesFromFilepath(path.resolve(DIRNAME, '../filetypes/index.vue')),
  YAML: getRulesFromFilepath(path.resolve(DIRNAME, '../filetypes/index.yaml')),
  YML: getRulesFromFilepath(path.resolve(DIRNAME, '../filetypes/index.yml')),
};
const ALL_RULES = Object.values(ALL_CONFIGS)
  .map(({
    rules,
  }) => rules)
  .reduce((object, rules) => {
    for (const [ rule, value ] of Object.entries(rules)) {
      if (!object[rule]) object[rule] = value;
    }
    return object;
  }, {});

function parseRulename(rule) {
  let [
    group,
    name = null,
    ...rulePath
  ] = rule.split('/');

  if (null === name) {
    name = group;
    group = null;
  } else if ('@eslint-community' === group || '@stylistic' === group) {
    group = `${ group }/${ name }`;
    name = rulePath.shift();
  } else if (rulePath.length) {
    rulePath.unshift(name);
    name = rulePath.pop();
  }
  return {
    group,
    name,
    namespace: rulePath.join('/'),
  };
}

export {
  ALL_CONFIGS,
  ALL_RULES,
  parseRulename,
};
