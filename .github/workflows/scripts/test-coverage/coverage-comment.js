(() => {
  'use strict';

  const exec = require('util').promisify(require('child_process').exec);

  const { exit } = process;
  const path = require('path');
  const { readFile } = require('fs').promises;
  const {
    get,
    patch,
    post,
  } = require('../util/github-request');

  const {
    GITHUB_BASE_REF,
    GITHUB_HEAD_REF,
    GITHUB_REPOSITORY,
    GITHUB_WORKSPACE,
    MY_GITHUB_USER,
    MY_GITHUB_PR_NUMBER,
  } = process.env;

  const BASE_PATH = `/repos/${ GITHUB_REPOSITORY }/issues/${ MY_GITHUB_PR_NUMBER }/comments`;
  const MD_TITLE = '**Test Coverage Report**';
  const UNKNOWN = 'Unknown';

  async function getTotal(cwd) {
    await exec('npm ci', { cwd });
    await exec('npm run test -- --coverageReporters="json-summary"', { cwd });
    const { total } = JSON.parse((await readFile(path.resolve(cwd, './coverage/coverage-summary.json'))).toString());

    return total;
  }

  async function getCoverage(cwd, branch) {
    await exec(`git fetch --no-tags --depth=1 origin ${ branch }`, { cwd });
    await exec(`git checkout ${ branch }`, { cwd });
    let total = null;

    try {
      total = await getTotal(cwd);
    } catch (err) {
      console.log(`could not determine coverage for ${ branch }`, err);
    }
    await exec('git reset --hard', { cwd });
    await exec('git clean -fdx', { cwd });
    return total;
  }

  function generateMdTable(src, dst, totals) {
    const srcNull = null === totals[src];
    const dstNull = null === totals[dst];
    const keys = Object.keys((srcNull ? totals[dst] : totals[src]));
    const styles = [
      { symbol: 'red_circle' },
      { symbol: 'green_circle' },
    ];

    let markdown = `${ MD_TITLE }\n\nType|${ src }|${ dst }|Diff\n--|--|--|--\n`;

    for (const key of keys) {
      const val1 = srcNull ? 0 : totals[src][key].pct;
      const val2 = dstNull ? 0 : totals[dst][key].pct;
      const val1IsUnknown = UNKNOWN === val1;
      const val2IsUnknown = UNKNOWN === val2;
      const diff = (val1IsUnknown ? 0 : val1) - (val2IsUnknown ? 0 : val2);
      const { symbol } = styles[Number(diff > -1)];

      markdown += `${ key }|\`${ val1 }${ val1IsUnknown ? '' : '%' }\`|\`${ val2 }${ val2IsUnknown ? '' : '%' }\`|:${ symbol }: \`${ diff }%\`\n`;
    }

    return markdown;
  }

  async function getCommentIfExists() {
    const response = await get(BASE_PATH);

    return (response.find(({ body, user: { login } = {}} = {}) => (String(body).startsWith(MD_TITLE) && MY_GITHUB_USER === login)) || {});
  }

  async function comment(id = null, body = '') {
    if (null === id) return post(BASE_PATH, { data: { body }});
    return patch(`/repos/${ GITHUB_REPOSITORY }/issues/comments/${ id }`, { data: { body }});
  }

  async function main() {
    const results = {};

    for (const branch of [ GITHUB_BASE_REF, GITHUB_HEAD_REF ]) {
      results[branch] = await getCoverage(GITHUB_WORKSPACE, branch);
    }

    const body = generateMdTable(GITHUB_HEAD_REF, GITHUB_BASE_REF, results);
    const { id = null } = await getCommentIfExists();

    await comment(id, body);
  }

  main()
    .catch((err) => {
      console.log(err);
      exit(1);
    });
})();
