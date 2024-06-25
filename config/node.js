(() => {
  'use strict';

  const path = require('path');

  const ROOT_DIR = path.resolve(__dirname, '../../../'); // this will be in <PROJECT>/node_modules/eslint-config-simplesense/rules/
  const NODE_VERSION = '>=16.0.0';

  module.exports = {
    name: 'simplesense/node',
    plugins: {
      n: require('eslint-plugin-n'),
    },
    rules: require('../rules/node'),
    settings: {
      allowModules: ['aws-sdk'],
      convertPath: {
        [`${ path.relative(ROOT_DIR, '/opt/nodejs') }/*`]: [ '^(.*?)/opt/nodejs/(.*?)$', 'lambda/layers/$2/nodejs/$2' ],
      },
      resolvePaths: [path.resolve(__dirname, `${ ROOT_DIR }/lambda/layers/node-modules/nodejs/node_modules`)],
      version: NODE_VERSION,
    },
  };
})();
