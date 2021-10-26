#!/usr/bin/env node

(() => {
  'use strict';

  const {
    getTaskListFromRange,
    gitCommitComment,
  } = require('../util/asana');

  async function main() {
    const tasks = await getTaskListFromRange();

    return Promise.all(tasks.map(({ commit, shortCommit, taskIds }) => {
      return Promise.all(taskIds.map((taskId) => gitCommitComment(taskId, commit, shortCommit)));
    }));
  }

  main()
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
})();
