(() => {
  'use strict';

  const { CONFIG } = require('../../helpers/docs-config');
  const { ALL_RULES, parseRulename } = require('../../helpers/eslint-config');
  const { version: VERSION } = require('../../package.json');

  const GROUPS = {};

  for (const rule of Object.keys(ALL_RULES).sort()) {
    const { group, name } = parseRulename(rule);
    const groupPath = null === group ? 'eslint-recommended' : group;
    const key = (null === group ? 'default' : group);

    if (!GROUPS[key]) GROUPS[key] = { children: [], ...CONFIG[key] };

    GROUPS[key].children.push({
      path: `/rules/${ groupPath }/${ name }`,
      title: name,
    });
  }

  module.exports = {
    base: '/eslint-config-simplesense/',
    title: `SimpleSense ESLint Config v${ VERSION }`,
    description: 'SimpleSense ESLint Configuration for Javascript, Node, Vue, and YAML.',
    theme: 'default-prefers-color-scheme',
    evergreen: true,
    plugins: {
      '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: true,
      },
    },
    head: [
      [ 'meta', { name: 'theme-color', content: '#14ac8f' }],
      [ 'link', { rel: 'icon', size: '32x32', href: '/assets/icons/cropped-favicon-32x32.png' }],
      [ 'link', { rel: 'icon', size: '180x180', href: '/assets/icons/cropped-favicon-180x180.png' }],
      [ 'link', { rel: 'apple-touch-icon', href: '/assets/icons/cropped-favicon-192x192.png' }],
      [ 'meta', { name: 'msapplication-TileImage', content: '/assets/icons/cropped-favicon-270x270.png' }],
    ],
    themeConfig: {
      repo: 'simplesenseio/eslint-config-simplesense',
      docsRepo: 'simplesenseio/eslint-config-simplesense',
      docsDir: 'docs',
      docsBranch: 'dev',
      editLinks: true,
      search: true,
      nav: [
        {
          text: 'Releases',
          link: 'https://github.com/simplesenseio/eslint-config-simplesense/releases',
        },
      ],
      sidebarDepth: 0,
      sidebar: {
        '/': [
          { path: '/', title: 'SimpleSense ESLint Config' },
          ...Object.keys(GROUPS).sort()
            .map((key) => ({
              collapsible: true,
              ...GROUPS[key],
            })),
        ],
      },
    },
  };
})();
