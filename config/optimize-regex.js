import plugin from 'eslint-plugin-optimize-regex';

export default {
  name: 'simplesense/optimize-regex',
  plugins: {
    'optimize-regex': plugin,
  },
  rules: plugin.configs.recommended.rules,
};
