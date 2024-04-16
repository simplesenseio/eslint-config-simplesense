// eslint-disable-next-line import/no-extraneous-dependencies
import {
  defineConfig,
} from 'vitepress'; // eslint-disable-line import/namespace, import/no-deprecated

import {
  version as VERSION,
  homepage,
} from '../../package.json';

// eslint-disable-next-line n/no-missing-import
import sidebar from './sidebar.json';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/eslint-config-simplesense/',
  title: `Simplesense Config v${ VERSION }`,
  titleTemplate: 'Simplesense',
  description: 'Simplesense ESLint Configuration for Javascript, Node, Vue, and YAML.',
  head: [
    [
      'link', {
        rel: 'icon',
        size: '32x32',
        href: '/assets/icons/cropped-favicon-32x32.png',
      },
    ],
    [
      'link', {
        rel: 'icon',
        size: '180x180',
        href: '/assets/icons/cropped-favicon-180x180.png',
      },
    ],
    [
      'link', {
        rel: 'shortcut icon',
        type: 'image/x-icon',
        href: '/assets/icons/favicon.svg',
      },
    ],
  ],
  cleanUrls: true,
  ignoreDeadLinks: true,
  themeConfig: {
    footer: {
      message: 'Released under the Apache License 2.0.',
      copyright: 'Copyright © 2021-present Simplesense Inc. All rights reserved.',
    },
    nav: [
      {
        text: 'Releases',
        link: 'https://github.com/simplesenseio/eslint-config-simplesense/releases',
      },
    ],
    sidebar,
    hasSidebar: true,
    socialLinks: [
      {
        icon: 'github',
        link: homepage,
      },
    ],
  },
});
