(() => {
  'use strict';

  const exec = require('util').promisify(require('child_process').exec);

  const {
    ASANA_ACCESS_TOKEN,
    GIT_START,
    GIT_END,
    GITHUB_REPOSITORY,
    MY_GITHUB_PR_NUMBER,
  } = process.env;

  function getTasksFromCommit(msg) {
    // match against si-12345
    const matches = msg.match((/si-\d+/giu));

    if (null === matches) return [];
    return matches.map((issue) => issue.split('-')[1]);
  }

  async function curlRequest(method, path, payload = null) {
    const { stdout } = await exec(`curl -X ${ method } https://app.asana.com/api/1.0/${ path } -H 'Accept: application/json' -H 'Authorization: Bearer ${ ASANA_ACCESS_TOKEN }' ${ null === payload ? '' : `-H 'Content-Type: application/json' -d '${ JSON.stringify({ data: payload }).trim() }'` }`.trim());

    const data = JSON.parse(stdout.trim());

    if (Array.isArray(data.errors)) {
      console.log(method, path, data);
      throw new Error(data.errors[0].message);
    }
    return data.data;
  }

  async function getTask(id) {
    return curlRequest('GET', `tasks/${ id }`);
  }

  async function getSections(id) {
    return curlRequest('GET', `projects/${ id }/sections`);
  }

  async function changeTaskSection(task, project, section) {
    return curlRequest('POST', `tasks/${ task }/addProject`, { project, section });
  }

  async function completeTask(taskId) {
    return curlRequest('PUT', `tasks/${ taskId }`, { completed: true });
  }

  async function gitCommitComment(taskId, commit, shortCommit) {
    // eslint-disable-next-line camelcase
    return curlRequest('POST', `tasks/${ taskId }/stories`, { html_text: `<body>Completed in <a href="https://github.com/${ GITHUB_REPOSITORY }/commit/${ commit }">${ GITHUB_REPOSITORY } ${ shortCommit }</a>.</body>` });
  }

  async function gitPrComment(taskId) {
    // eslint-disable-next-line camelcase
    return curlRequest('POST', `tasks/${ taskId }/stories`, { html_text: `<body>Referenced in <a href="https://github.com/${ GITHUB_REPOSITORY }/pull/${ MY_GITHUB_PR_NUMBER }">${ GITHUB_REPOSITORY } PR#${ MY_GITHUB_PR_NUMBER }</a>.</body>` });
  }

  async function getTaskListFromRange() {
    const { stdout } = await exec(`git log --pretty=format:'{%n  "commit": "%H",%n  "shortCommit": "%h",%n  "subject": "%s",%n  "body": "%b"%n},' ${ GIT_START }...${ GIT_END }`);

    return JSON.parse(`[${ stdout
      .trim()
      .slice(0, -1)
      .replace((/\n/g), ' ')
    }]`).map(({
      commit,
      shortCommit,
      subject,
      body,
    }) => {
      const taskIds = [
        ...new Set([
          ...getTasksFromCommit(String(subject).trim()),
          ...getTasksFromCommit(String(body).trim()),
        ]),
      ];

      return {
        commit,
        shortCommit,
        taskIds,
      };
    })
      .filter(({ taskIds }) => taskIds.length);
  }

  module.exports = {
    changeTaskSection,
    completeTask,
    getSections,
    getTask,
    getTaskListFromRange,
    gitCommitComment,
    gitPrComment,
  };
})();
