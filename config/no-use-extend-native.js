(() => {
  'use strict';

  const plugin = require('eslint-plugin-no-use-extend-native');

  module.exports = {
    name: 'simplesense/no-use-extend-native',
    plugins: {
      'no-use-extend-native': plugin,
    },
    rules: plugin.configs.recommended.rules,
  };
})();
