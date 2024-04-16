(() => {
  'use strict';

  const plugin = require('eslint-plugin-optimize-regex');

  module.exports = {
    name: 'simplesense/optimize-regex',
    plugins: {
      'optimize-regex': plugin,
    },
    rules: plugin.configs.recommended.rules,
  };
})();
