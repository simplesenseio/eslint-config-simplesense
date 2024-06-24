// https://vitepress.dev/guide/custom-theme
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  h,
} from 'vue'; // eslint-disable-line import/namespace, import/no-deprecated
import DefaultTheme from 'vitepress/theme';
// eslint-disable-next-line import/no-unassigned-import
import './style.css';

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
