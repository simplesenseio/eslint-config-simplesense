(() => {
  'use strict';

  const path = require('path');
  const {
    execSync,
  } = require('child_process');

  function getRulesFromFilepath(filepath) {
    let config = execSync(`npx eslint --print-config ${ filepath }`, {
      cwd: path.resolve(__dirname, '../'),
    }).toString();

    config = config
      .replaceAll(path.resolve(__dirname, '../../../'), '<root>')
      .replaceAll('../../../opt/nodejs', '/opt/nodejs')
      .replaceAll('../../opt/nodejs', '/opt/nodejs');

    return JSON.parse(config);
  }

  const ALL_CONFIGS = {
    JS: getRulesFromFilepath(path.resolve(__dirname, '../filetypes/index.js')),
    VUE: getRulesFromFilepath(path.resolve(__dirname, '../filetypes/index.vue')),
    YAML: getRulesFromFilepath(path.resolve(__dirname, '../filetypes/index.yaml')),
    YML: getRulesFromFilepath(path.resolve(__dirname, '../filetypes/index.yml')),
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
    } else if ('@eslint-community' === group) {
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

  module.exports = {
    ALL_CONFIGS,
    ALL_RULES,
    parseRulename,
  };
})();
