#!/usr/bin/env node

(async() => {
  'use strict';

  const path = require('path');
  const {
    writeFile,
  } = require('fs').promises;
  const {
    CONFIG,
  } = require('../helpers/docs-config');
  const {
    ALL_RULES, parseRulename,
  } = require('../helpers/eslint-config');

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

  await writeFile(path.resolve(__dirname, '../docs/.vitepress/sidebar.json'), JSON.stringify({
    '/rules/': [
      {
        items: [
          ...Object.keys(GROUPS).sort()
            .map((key) => ({
              collapsed: true,
              ...GROUPS[key],
            })),
        ],
      },
    ],
  }, null, 2));
})();
