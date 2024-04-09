(() => {
  'use strict';

  const {
    configs,
  } = require('eslint-plugin-regexp');

  const config = {
    ...configs['flat/recommended'],
  };

  module.exports = config;
})();
