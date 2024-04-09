(() => {
  'use strict';

  const plugin = require('eslint-plugin-vue');

  module.exports = [
    ...plugin.configs['flat/vue2-strongly-recommended'],
    {
      name: 'simplesense/vue',
      files: [ '*.vue', '**/*.vue' ],
      plugins: {
        vue: plugin,
      },
      rules: require('../rules/vue'),
    },
  ];
})();
