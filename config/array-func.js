import plugin from 'eslint-plugin-array-func';

import rules from '../rules/array-func.js';

export default {
  name: 'simplesense/array-func',
  plugins: {
    'array-func': plugin,
  },
  rules,
};
