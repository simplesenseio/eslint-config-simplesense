#!/usr/bin/env node

(() => {
  'use strict';

  const {
    getTaskListFromRange,
    gitPrComment,
  } = require('../util/asana');

  async function main() {
    const tasks = await getTaskListFromRange();
    const ids = [];

    for (const { taskIds } of tasks) {
      ids.push(...taskIds);
    }

    return Promise.all([...new Set(ids)].map(gitPrComment));
  }

  main()
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
})();
