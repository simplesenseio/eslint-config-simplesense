#!/usr/bin/env node

(() => {
  'use strict';

  const exec = require('util').promisify(require('child_process').exec);
  const {
    post,
  } = require('../util/github-request');

  const {
    GITHUB_REPOSITORY,
    GITHUB_RUN_ID,
    GITHUB_WORKSPACE,
    MY_GIT_EMAIL,
    MY_GIT_NAME,
  } = process.env;

  async function rebaseDev() {
    const cwd = GITHUB_WORKSPACE;

    await exec(`git config --global user.email "${ MY_GIT_EMAIL }"`, { cwd });
    await exec(`git config --global user.name "${ MY_GIT_NAME }"`, { cwd });
    await exec('git config --global pull.rebase false', { cwd });
    await exec('git checkout dev', { cwd });
    await exec('git pull', { cwd });
    await exec('git rebase main', { cwd });
    await exec('git push -f', { cwd });
  }

  async function createPr() {
    return post(`/repos/${ GITHUB_REPOSITORY }/pulls`, {
      data: {
        title: 'merge: main to dev',
        head: 'main',
        base: 'dev',
        draft: true,
        body: `@simplesenseio/release-team I'm unable to automatically rebase main to dev. I've created this PR as a placeholder. You should handle the rebase manually, which will automatically close this PR.\n\nSee the [job logs](https://github.com/${ GITHUB_REPOSITORY }/actions/runs/${ GITHUB_RUN_ID }) for details.`,
      },
    });
  }

  async function main() {
    try {
      await rebaseDev();
    } catch (err) {
      console.log('Unable to rebase', err);
      await createPr();
    }
  }

  main()
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
})();
