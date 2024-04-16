(() => {
  'use strict';

  const plugin = require('eslint-plugin-sonarjs');

  module.exports = {
    name: 'simplesense/sonarjs',
    plugins: {
      sonarjs: plugin,
    },
    rules: {
      ...plugin.configs.recommended.rules,
      ...require('../rules/sonarjs'),
    },
  };
})();
