import plugin from '@stylistic/eslint-plugin';

import rules from '../rules/stylistic.js';

export default {
  name: 'simplesense/stylistic',
  plugins: {
    '@stylistic': plugin,
  },
  rules,
};
