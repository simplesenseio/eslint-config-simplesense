#!/usr/bin/env node

(async() => {
  'use strict';

  const path = require('path');
  const {
    writeFile,
  } = require('fs').promises;
  const {
    ALL_CONFIGS,
  } = require('../helpers/eslint-config');

  // eslint-disable-next-line security/detect-non-literal-fs-filename
  await Promise.all(Object.entries(ALL_CONFIGS).map(([ ext, config ]) => writeFile(path.resolve(__dirname, `../generated-configs/${ ext.toLowerCase() }.json`), JSON.stringify(config, null, 2))));
})();
