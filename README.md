# Simplesense ESLint Config

[![GitHub Pages](https://img.shields.io/static/v1?label=GitHub&message=Pages&color=informational&style=flat-square&logo=github)](https://simplesenseio.github.io/eslint-config-simplesense/)
[![Build](https://github.com/simplesenseio/eslint-config-simplesense/actions/workflows/build.yaml/badge.svg?branch=main&style=flat-square)](https://github.com/simplesenseio/eslint-config-simplesense/actions/workflows/build.yaml)


## Generating Documentation

All rules must be documented so they can be searched in [GitHub Pages](https://simplesenseio.github.io/eslint-config-simplesense/).
Documentation is auto-generated using the [`generate-docs`](./scripts/generate-docs.js) script.
Most ESLint plugins provide individual rules' documentation with the file structure of `docs/<rule-name>.md` in their source.
Some plugins will ship the `docs` directory within their package, others exclude them by not providing the `docs` directory within their package configuration.

- When docs are shipped with the NPM module, use the `writeFromModules` method.
- When docs exist, but are not available within `node_modules`, use the `writeFromGitHub` method.
- When no docs are provided, create individual markdown files, following [`docs/static/<plugin-name>/<rule-name>.md`](./docs/static/), and use the `writeFromStatic` method.

## Adding Plugins / Configurations

Adding plugins is fairly straightforward.

**Step 1**

- To simply use a recommended configuration, add the plugin as a dependency and add config to the [config](./config/) directory that imports the recommended rules and the plugin itself. Then add the config to the exported array in [`index.js`](./index.js).
- To configure custom rules for a plugin, add a new file, [`rules/<plugin-name>.js`](./rules/), and export the rules object. Then add the config by following the details in the previous step, however, use the custom rules by themselves or with the exported recommended rules of the plugin.
- If the new plugin lints a new file type, add a `index.<filetype>` file to the [`filetypes`](./filetypes/) directory and update the `lint:eslint` script in [`package.json`](./package.json) to include the new extension.

**Step 2**

Add your new plugin to the [`docs-config`](./helpers/docs-config.js) helper, specifiying the necessary properties required to generate the documentation.

**Step 3**

Verify everything builds as expected.

```bash
npm install
npm run lint
npm run test
npm run docs:dev
# navigate to the URL provided by Vuepress
```
