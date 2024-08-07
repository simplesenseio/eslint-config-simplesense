import plugin from 'eslint-plugin-sonarjs';

import rules from '../rules/sonarjs.js';

export default {
  name: 'simplesense/sonarjs',
  plugins: {
    sonarjs: plugin,
  },
  rules: {
    ...plugin.configs.recommended.rules,
    ...rules,
  },
};
