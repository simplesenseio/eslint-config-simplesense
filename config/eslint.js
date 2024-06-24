import js from '@eslint/js';

import rules from '../rules/eslint-recommended.js';

export default {
  name: 'simplesense/eslint',
  rules: {
    ...js.configs.recommended.rules,
    ...rules,
  },
};
