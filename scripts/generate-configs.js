#!/usr/bin/env node

import path from 'node:path';
import {
  fileURLToPath,
} from 'node:url';
import {
  writeFile,
} from 'node:fs/promises';

import {
  ALL_CONFIGS,
} from '../helpers/eslint-config.js';

const DIRNAME = path.dirname(fileURLToPath(import.meta.url));

// eslint-disable-next-line security/detect-non-literal-fs-filename
await Promise.all(Object.entries(ALL_CONFIGS).map(([ ext, config ]) => writeFile(path.resolve(DIRNAME, `../generated-configs/${ ext.toLowerCase() }.json`), JSON.stringify(config, null, 2))));
