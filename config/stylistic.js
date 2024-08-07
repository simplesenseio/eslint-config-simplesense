import plugin from '@stylistic/eslint-plugin-js';

import rules from '../rules/stylistic.js';

export default {
  name: 'simplesense/stylistic',
  plugins: {
    '@stylistic/js': plugin,
  },
  rules,
};
