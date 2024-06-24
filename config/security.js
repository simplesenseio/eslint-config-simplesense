import plugin from 'eslint-plugin-security';

import rules from '../rules/security.js';

export default {
  name: 'simplesense/security',
  plugins: {
    security: plugin,
  },
  rules,
};
