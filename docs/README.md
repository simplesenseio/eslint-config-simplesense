<div style="text-align: center">
  <img :src="$withBase('/assets/eslint-logo.svg')" width="150" height="150">
</div>

# SimpleSense ESLint Config

[![NPM Version](https://img.shields.io/npm/v/eslint-config-simplesense.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-simplesense)
[![ESLint](https://img.shields.io/npm/dependency-version/eslint-config-simplesense/dev/eslint?color=%234b32c3&label=ESLint&logo=eslint&style=flat-square)](https://eslint.org/docs/user-guide/getting-started)

## Usage

In addition to `eslint` it's required that you install `sort-package-json` as a dev dependency and use it in the package scripts.

### Install

```bash
npm install --save-dev eslint-config-simplesense sort-package-json
```

### Configure .eslintrc

```json
{
  "extends": ["simplesense"]
}
```

### Configure package.json

```json
{
  "scripts": {
    "lint": "npm run lint:package-json && npm run lint:eslint",
    "lint:package-json": "sort-package-json",
    "lint:eslint": "eslint --fix '**/*.{js,vue,yaml,yml}'"
  }
}
```

## What's Included

  * [eslint-plugin-array-func](https://www.npmjs.com/package/eslint-plugin-array-func)
  * [eslint-plugin-eslint-comments](https://www.npmjs.com/package/eslint-plugin-eslint-comments)
  * [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
  * [eslint-plugin-no-use-extend-native](https://www.npmjs.com/package/eslint-plugin-no-use-extend-native)
  * [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node)
  * [eslint-plugin-optimize-regex](https://www.npmjs.com/package/eslint-plugin-optimize-regex)
  * [eslint-plugin-regexp](https://www.npmjs.com/package/eslint-plugin-regexp)
  * [eslint-plugin-security](https://www.npmjs.com/package/eslint-plugin-security)
  * [eslint-plugin-sonarjs](https://www.npmjs.com/package/eslint-plugin-sonarjs)
  * [:unicorn: eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn)
  * [eslint-plugin-vue](https://www.npmjs.com/package/eslint-plugin-vue)
  * [eslint-plugin-yml](https://www.npmjs.com/package/eslint-plugin-yml)


## Why Use a Linter?

> Well run projects have clear consistent coding conventions, with automated enforcement.  Not having coding conventions is also a barrier to attracting contributions, and depending on a project that does not welcome (quality!) contributions is itself a risk. Besides checking style, linters are also excellent tools for finding certain classes of bugs, such as those related to variable scope. Assignment to undeclared variables (these leak into the global scope, contaminating it and possibly causing very difficult to find bugs) and use of undefined variables are examples of errors that are detectable at lint time.
>
> -- <cite>[Sam Roberts](https://medium.com/the-node-js-collection/why-and-how-to-use-eslint-in-your-project-742d0bc61ed7)</cite>
