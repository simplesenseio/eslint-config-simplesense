# `prefer-flat-map`

Use `.flatMap()` to map and then flatten an array instead of using `.map().flat()`.

This rule is auto fixable.

## Examples

Code that triggers this rule:

```js
const mappedAndFlattened = array.map((p) => p).flat();

const flatWithDefaultDepth = array.map((r) => r).flat(1);
```

Code that doesn't trigger this rule:

```js
const oneAction = array.flatMap((m) => m);

const flattened = array.flat();

const mapped = array.map((r) => r + 1);

const flattenedThenMapped = array.flat().map((r) => r + 1);

const flatMappedWithExtra = array.map((r) => r + 1).reverse().flat();

const flatWithDepth = array.map((p) => p).flat(99);
```

## Using the rule

To use this rule, your `eslint.config.js` should at least contain the following:

```js
import arrayFunc from "eslint-plugin-array-func";

export default [
  {
    plugins: {
      "array-func": arrayFunc
    },
    rules: {
      "array-func/prefer-flat-map": "error"
    }
  }
];
```
