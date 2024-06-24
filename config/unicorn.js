import plugin from 'eslint-plugin-unicorn';

import rules from '../rules/unicorn.js';

export default {
  name: 'simplesense/unicorn',
  plugins: {
    unicorn: plugin,
  },
  rules,
};
