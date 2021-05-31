# `prefer-flat`

Use `.flat()` to flatten an array of arrays. This rule currently recognizes two
patterns and can replace them with a `.flat()` call:

- `[].concat(...array)`
- `array.reduce((p, n) => p.concat(n), [])`

This rule is auto fixable.

## Examples

Code that triggers this rule:

```js
const concatFlat = array.flat();

const reduceFlat = array.flat();
```

Code that doesn't trigger this rule:

```js
const flattened = array.flat();

const reverseFlat = array.reduce((p, n) => n.concat(p), []);

const otherReduce = array.reduce((p, n) => n + p, 0);
```

## Using the rule

To use this rule, your `.eslintrc.json` should at least contain the following (may look different for other config file styles):

```json
{
  "plugins": [
    "array-func"
  ],
  "rules": {
    "array-func/prefer-flat": "error"
  }
}
```
