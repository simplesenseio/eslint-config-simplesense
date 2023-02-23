(() => {
  'use strict';

  const path = require('path');
  const {
    execSync,
  } = require('child_process');

  function getRulesFromFilepath(filepath) {
    const config = JSON.parse(execSync(`npx eslint -c ${ path.resolve(__dirname, '../index.js') } --print-config ${ filepath }`, {
      cwd: path.resolve(__dirname, '../'),
    }).toString());

    return config.rules;
  }

  const ALL_RULES = [
    getRulesFromFilepath(path.resolve(__dirname, '../filetypes/index.js')),
    getRulesFromFilepath(path.resolve(__dirname, '../filetypes/index.vue')),
    getRulesFromFilepath(path.resolve(__dirname, '../filetypes/index.yaml')),
    getRulesFromFilepath(path.resolve(__dirname, '../filetypes/index.yml')),
  ].reduce((object, rules) => {
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
    ALL_RULES,
    parseRulename,
  };
})();
