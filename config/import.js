(() => {
  'use strict';

  module.exports = {
    name: 'simplesense/import',
    plugins: {
      import: require('eslint-plugin-import'),
    },
    rules: require('../rules/import'),
  };
})();
