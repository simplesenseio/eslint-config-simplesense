import plugin from 'eslint-plugin-no-use-extend-native';

export default {
  name: 'simplesense/no-use-extend-native',
  plugins: {
    'no-use-extend-native': plugin,
  },
  rules: plugin.configs.recommended.rules,
};
