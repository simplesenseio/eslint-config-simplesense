#!/usr/bin/env node

import path from 'node:path';
import {
  writeFile,
} from 'node:fs/promises';
import {
  fileURLToPath,
} from 'node:url';

import {
  CONFIG,
} from '../helpers/docs-config.js';
import {
  ALL_RULES,
  parseRulename,
} from '../helpers/eslint-config.js';


const DIRNAME = path.dirname(fileURLToPath(import.meta.url));
const GROUPS = {};

for (const rule of Object.keys(ALL_RULES).sort()) {
  const {
    group, name,
  } = parseRulename(rule);
  const groupPath = null === group ? 'eslint-recommended' : group;
  const key = (null === group ? 'default' : group);

  if (!GROUPS[key]) {
    GROUPS[key] = {
      items: [],
      text: CONFIG[key].title,
    };
  }

  GROUPS[key].items.push({
    link: `/rules/${ groupPath }/${ name }`,
    text: name,
  });
}

await writeFile(path.resolve(DIRNAME, '../docs/.vitepress/sidebar.json'), JSON.stringify({
  '/rules/': [
    {
      items:
        Object.keys(GROUPS).sort()
          .map((key) => ({
            collapsed: true,
            ...GROUPS[key],
          }))
      ,
    },
  ],
}, null, 2));
