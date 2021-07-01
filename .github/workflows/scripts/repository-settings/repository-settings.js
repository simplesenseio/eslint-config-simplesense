#!/usr/bin/env node

(() => {
  'use strict';

  const {
    get,
    patch,
    put,
  } = require('../util/github-request');
  const {
    branch_protection: BRANCH_PROTECTION_SETTINGS,
    branch_protection_override: BRANCH_PROTECTION_OVERRIDE,
    repository: REPOSITORY_SETTINGS,
  } = require('./repository-settings.json');

  const {
    GITHUB_REPOSITORY,
  } = process.env;
  const BASE_PATH = `/repos/${ GITHUB_REPOSITORY }`;
  const PROTECTED_BRANCHES = [ 'dev', 'main' ];

  async function branchProtectionSettings() {
    for (const branch of PROTECTED_BRANCHES) {
      const override = (BRANCH_PROTECTION_OVERRIDE[branch] || {});

      await put(`${ BASE_PATH }/branches/${ branch }/protection`, {
        data: Object.assign({}, BRANCH_PROTECTION_SETTINGS, override),
        headers: { Accept: 'application/vnd.github.luke-cage-preview+json' },
      });
    }
  }

  async function repositorySettings() {
    const { private: isPrivate, visibility } = (await get(BASE_PATH));

    if ('public' === visibility || false === isPrivate) {
      // eslint-disable-next-line camelcase
      REPOSITORY_SETTINGS.has_issues = true;
    }
    await patch(BASE_PATH, { data: REPOSITORY_SETTINGS });
    // order matters, vulnerability-alerts must be enabled before automated-security-fixes
    await put(`${ BASE_PATH }/vulnerability-alerts`, {
      headers: { Accept: 'application/vnd.github.dorian-preview+json' },
    });
    await put(`${ BASE_PATH }/automated-security-fixes`, {
      headers: { Accept: 'application/vnd.github.london-preview+json' },
    });
  }

  async function addTeamsToRepository() {
    const { restrictions: { teams = []} = {}} = BRANCH_PROTECTION_SETTINGS;
    const [organization] = GITHUB_REPOSITORY.split('/');

    for (const team of teams) {
      await put(`/orgs/${ organization }/teams/${ team.replace(`${ organization }/`, '') }/repos/${ GITHUB_REPOSITORY }`, {
        data: { permission: 'admin' },
      });
    }
  }

  async function main() {
    await addTeamsToRepository();
    await branchProtectionSettings();
    await repositorySettings();
  }

  main()
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
})();
