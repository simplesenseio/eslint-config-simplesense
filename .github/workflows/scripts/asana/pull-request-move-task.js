#!/usr/bin/env node

(() => {
  'use strict';

  const {
    getSections,
    getTask,
    getTaskListFromRange,
    changeTaskSection,
  } = require('../util/asana');

  async function main() {
    const tasks = await getTaskListFromRange();
    const ids = [];

    for (const { taskIds } of tasks) {
      ids.push(...taskIds);
    }

    return Promise.all([...new Set(ids)].map(async(taskId) => {
      const task = await getTask(taskId);

      return Promise.all(task.projects.map(async({ gid: projectId, name: projectName }) => {
        // test agains Dev-Sprint-12-34
        if (!(/^dev-sprint-\d{2}-\d{2}$/iu).test(projectName)) return;
        const { gid: sectionId = null } = (await getSections(projectId)).find(({ name }) => name.toLowerCase() === 'in review') || {};

        if (null === sectionId) return;
        changeTaskSection(taskId, projectId, sectionId);
      }));
    }));
  }

  main()
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
})();
