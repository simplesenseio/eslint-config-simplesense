(() => {
  'use strict';

  const plugin = require('@eslint-community/eslint-plugin-eslint-comments');

  module.exports = {
    name: 'simplesense/eslint-comments',
    plugins: {
      '@eslint-community/eslint-comments': plugin,
    },
    rules: plugin.configs.recommended.rules,
  };
})();
