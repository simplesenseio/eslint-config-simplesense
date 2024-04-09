# `prefer-array-from`

Use `Array.from` instead of `[...iterable]`.
See [`from-map`](#from-map) for additional benefits `Array.from` can provide over the spread syntax.

This rule is auto fixable.

## Examples

Code that triggers this rule:

```js
const iterable = [..."string"];

const arrayCopy = [...iterable];
```

Code that doesn't trigger this rule:

```js
const array = [1, 2, 3];

const extendedArray =  [0, ...array];

const arrayCopy = Array.from(array);

const characterArray = Array.from("string");
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
      "array-func/prefer-array-from": "error"
    }
  }
];
```
