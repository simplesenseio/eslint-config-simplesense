# SimpleSense ESLint Config

[![GitHub Pages](https://img.shields.io/static/v1?label=GitHub&message=Pages&color=informational&style=flat-square&logo=github)](https://simplesenseio.github.io/eslint-config-simplesense/)
[![NPM Build](https://github.com/simplesenseio/eslint-config-simplesense/actions/workflows/npm-build.yml/badge.svg?branch=dev&style=flat-square)](https://github.com/simplesenseio/eslint-config-simplesense/actions/workflows/npm-build.yml)


## Generating Documentation

All rules must be documented so they can be searched in [GitHub Pages](https://simplesenseio.github.io/eslint-config-simplesense/).
Documentation is auto-generated using the [`generate-docs`](./scripts/generate-docs.js) script.
Most ESLint plugins provide inidividual rules' documentation with the file structure of `docs/<rule-name>.md` in their source.
Some plugins will ship the `docs` directory within their package, others exclude them by not providing the `docs` directory within their package configuration.

- When docs are shipped with the NPM module, use the `writeFromModules` method.
- When docs exist, but are not available within `node_modules`, use the `writeFromGitHub` method.
- When no docs are provided, create individual markdown files, following [`docs/static/<plugin-name>/<rule-name>.md`](./docs/static/), and use the `writeFromStatic` method.

## Adding Plugins / Configurations

Adding plugins is fairly straightforward.

**Step 1**

- To simply use a recommended configuration, add the plugin as a dependency and add the recommendation to the `extends` array in [`index.js`](./index.js).
- To configure custom rules for a plugin, add a new file, [`plugins/<plugin-name>.js`](./plugins/), and export the rules object. Then add a `require` statement to [`index.js`](./index.js) in the `plugins` object. You can also add a recommended config to the `extends` array.
- If your new plugin lints a new file type, add a `index.<filetype>` file to the [`filetypes`](./filetypes/) directory and update the `lint:eslint` script in [`package.json`](./package.json) to include the new extension.

**Step 2**

Add your new plugin to the [`docs-config`](./helpers/docs-config.js) helper, specifiying the necessary properties required to generate the documentation.

**Step 3**

Verify everything builds as expected.

```bash
npm run lint
npm run test
npm run docs:dev
# navigate to the URL provided by Vuepress
```
