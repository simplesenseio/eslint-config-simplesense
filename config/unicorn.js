(() => {
  'use strict';

  module.exports = {
    name: 'simplesense/unicorn',
    plugins: {
      unicorn: require('eslint-plugin-unicorn'),
    },
    rules: require('../rules/unicorn'),
  };
})();
