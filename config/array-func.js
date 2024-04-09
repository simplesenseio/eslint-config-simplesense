(() => {
  'use strict';

  module.exports = {
    name: 'simplesense/array-func',
    plugins: {
      'array-func': require('eslint-plugin-array-func'),
    },
    rules: require('../rules/array-func'),
  };
})();
