(() => {
  'use strict';

  module.exports = {
    name: 'simplesense/node',
    plugins: {
      n: require('eslint-plugin-n'),
    },
    rules: require('../rules/node'),
  };
})();
