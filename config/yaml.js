import plugin, {
  configs,
} from 'eslint-plugin-yml';

import rules from '../rules/yaml.js';

export default [
  ...configs['flat/standard'],
  {
    name: 'simplesense/yaml',
    files: [
      '*.yaml',
      '**/*.yaml',
      '*.yml',
      '**/*.yml',
    ],
    plugins: {
      yaml: plugin,
    },
    rules,
  },
];
