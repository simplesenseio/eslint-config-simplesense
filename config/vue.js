import plugin from 'eslint-plugin-vue';

import rules from '../rules/vue.js';

export default [
  ...plugin.configs['flat/vue2-strongly-recommended'],
  {
    name: 'simplesense/vue',
    files: [ '*.vue', '**/*.vue' ],
    plugins: {
      vue: plugin,
    },
    rules,
  },
];
