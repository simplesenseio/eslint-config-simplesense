import plugin from '@eslint-community/eslint-plugin-eslint-comments';

export default {
  name: 'simplesense/eslint-comments',
  plugins: {
    '@eslint-community/eslint-comments': plugin,
  },
  rules: plugin.configs.recommended.rules,
};
