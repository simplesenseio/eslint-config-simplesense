(() => {
  'use strict';

  module.exports = {
    name: 'simplesense/security',
    plugins: {
      security: require('eslint-plugin-security'),
    },
    rules: require('../rules/security'),
  };
})();
