#!/usr/bin/env node

(() => {
  'use strict';

  const {
    getTaskListFromRange,
  } = require('../util/asana');
  const {
    get,
    patch,
    post,
  } = require('../util/github-request');

  const {
    GITHUB_REPOSITORY,
    MY_GITHUB_USER,
    MY_GITHUB_PR_NUMBER,
  } = process.env;

  const MD_TITLE = '**Asana Task(s)**';
  const REQUEST_BASE_PATH = `/repos/${ GITHUB_REPOSITORY }/issues/${ MY_GITHUB_PR_NUMBER }/comments`;

  async function getCommentIfExists() {
    const response = await get(REQUEST_BASE_PATH);

    return (response.find(({ body, user: { login } = {}} = {}) => (String(body).startsWith(MD_TITLE) && MY_GITHUB_USER === login)) || {});
  }

  async function comment(id = null, body = '') {
    if (null === id) return post(REQUEST_BASE_PATH, { data: { body }});
    return patch(`/repos/${ GITHUB_REPOSITORY }/issues/comments/${ id }`, { data: { body }});
  }

  async function generateBody() {
    const tasks = await getTaskListFromRange();
    const ids = [];

    for (const { taskIds } of tasks) {
      ids.push(...taskIds);
    }

    if (!ids.length) return null;

    const list = [];

    for (const id of [...new Set(ids)]) {
      list.push(`* [${ id }](https://app.asana.com/0/0/${ id })`);
    }

    return `${ MD_TITLE }\n\n${ list.join('\n') }`;
  }

  async function main() {
    const body = await generateBody();

    if (null === body) return;

    const { id = null } = await getCommentIfExists();

    await comment(id, body);
  }

  main()
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
})();
