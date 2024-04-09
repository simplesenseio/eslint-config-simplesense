(() => {
  'use strict';

  const {
    configs,
  } = require('@eslint/js');

  module.exports = {
    name: 'simplesense/eslint',
    rules: {
      ...configs.recommended.rules,
      ...require('../rules/eslint-recommended'),
    },
  };
})();
