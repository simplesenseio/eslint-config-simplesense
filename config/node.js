import path from 'node:path';
import {
  fileURLToPath,
} from 'node:url';

import plugin from 'eslint-plugin-n';

import rules from '../rules/node.js';

const DIRNAME = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(DIRNAME, '../../../'); // this will be in <PROJECT>/node_modules/eslint-config-simplesense/rules/
const NODE_VERSION = '>=18.0.0';

export default {
  name: 'simplesense/node',
  plugins: {
    n: plugin,
  },
  rules,
  settings: {
    n: {
      allowModules: ['aws-sdk'],
      convertPath: {
        [`${ path.relative(ROOT_DIR, '/opt/nodejs') }/*`]: [ '^(.*?)/opt/nodejs/(.*?)$', 'lambda/layers/$2/nodejs/$2' ],
      },
      version: NODE_VERSION,
    },
  },
};
