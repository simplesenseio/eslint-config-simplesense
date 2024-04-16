(() => {
  'use strict';

  const plugin = require('eslint-plugin-yml');

  module.exports = [
    ...plugin.configs['flat/standard'],
    {
      name: 'simplesense/yaml',
      files: [ '*.yaml', '**/*.yaml', '*.yml', '**/*.yml' ],
      plugins: {
        yaml: plugin,
      },
      rules: require('../rules/yaml'),
    },
  ];
})();
