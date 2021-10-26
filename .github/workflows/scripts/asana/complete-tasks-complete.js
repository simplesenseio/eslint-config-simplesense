#!/usr/bin/env node

(() => {
  'use strict';

  const {
    getTaskListFromRange,
    completeTask,
  } = require('../util/asana');

  async function main() {
    const tasks = await getTaskListFromRange();

    return Promise.all(tasks.map(({ taskIds }) => {
      return Promise.all(taskIds.map(completeTask));
    }));
  }

  main()
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
})();
