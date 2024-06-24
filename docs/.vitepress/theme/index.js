// https://vitepress.dev/guide/custom-theme
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  h,
} from 'vue'; // eslint-disable-line n/no-extraneous-import
import DefaultTheme from 'vitepress/theme'; // eslint-disable-line import/no-unresolved
import './style.css'; // eslint-disable-line import/no-unassigned-import

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {});
  },
  enhanceApp({
    app, router, siteData,
  }) {
    // ...
  },
};
