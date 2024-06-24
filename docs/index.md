---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: Simplesense
  text: ESLint Config
  tagline: Javascript, Node, Vue, and YAML
  image:
    src: /assets/eslint-logo.svg
    alt: Simplesense
  actions:
    - theme: alt
      text: Browse Rules
      link: /rules

# features:
#   - title: Feature A
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature B
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature C
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<div style="display: flex; flex: 1">

[![NPM Version](https://img.shields.io/npm/v/eslint-config-simplesense.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-simplesense)

<span style="display: block; width: 16px" />

[![ESLint](https://img.shields.io/npm/dependency-version/eslint-config-simplesense/dev/eslint?color=%234b32c3&label=ESLint&logo=eslint&style=flat-square)](https://eslint.org/docs/user-guide/getting-started)

</div>

<hr style="margin-bottom: 2rem" />

# Usage

In addition to `eslint` it's required that you install `sort-package-json` as a dev dependency and use it in the package scripts.

## Install

```bash
npm install eslint-config-simplesense sort-package-json -D
```

## Configure eslint.config.js

```javascript
module.exports = [
  ...require('eslint-config-simplesense'),
  {
    // your custom configuration
  }
]
```

## Configure package.json

```json
{
  "scripts": {
    "lint": "npm run lint:package-json && npm run lint:eslint",
    "lint:package-json": "sort-package-json",
    "lint:eslint": "eslint --fix '**/*.{js,vue,yaml,yml}'"
  }
}
```

# What's Included

  * [eslint-plugin-array-func](https://www.npmjs.com/package/eslint-plugin-array-func)
  * [@eslint-community/eslint-plugin-eslint-comments](https://www.npmjs.com/package/@eslint-community/eslint-plugin-eslint-comments)
  * [@stylistic/eslint-plugin-js](https://www.npmjs.com/package/@stylistic/eslint-plugin-js)
  * [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
  * [eslint-plugin-n](https://www.npmjs.com/package/eslint-plugin-n)
  * [eslint-plugin-optimize-regex](https://www.npmjs.com/package/eslint-plugin-optimize-regex)
  * [eslint-plugin-regexp](https://www.npmjs.com/package/eslint-plugin-regexp)
  * [eslint-plugin-security](https://www.npmjs.com/package/eslint-plugin-security)
  * [eslint-plugin-sonarjs](https://www.npmjs.com/package/eslint-plugin-sonarjs)
  * [eslint-plugin-unicorn :unicorn:](https://www.npmjs.com/package/eslint-plugin-unicorn)
  * [eslint-plugin-vue](https://www.npmjs.com/package/eslint-plugin-vue)
  * [eslint-plugin-yml](https://www.npmjs.com/package/eslint-plugin-yml)


# Why Use a Linter?

> Well run projects have clear consistent coding conventions, with automated enforcement.  Not having coding conventions is also a barrier to attracting contributions, and depending on a project that does not welcome (quality!) contributions is itself a risk. Besides checking style, linters are also excellent tools for finding certain classes of bugs, such as those related to variable scope. Assignment to undeclared variables (these leak into the global scope, contaminating it and possibly causing very difficult to find bugs) and use of undefined variables are examples of errors that are detectable at lint time.
>
> -- <cite>[Sam Roberts](https://medium.com/the-node-js-collection/why-and-how-to-use-eslint-in-your-project-742d0bc61ed7)</cite>
