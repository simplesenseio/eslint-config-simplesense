# `prefer-flat-map`

Use `.flatMap()` to flatten an array and map the values instead of using
`.flat().map()`.

This rule is auto fixable.

## Examples

Code that triggers this rule:

```js
const flattenedAndMapped = array.flat();

const flatWithDefaultDepth = array.flat();
```

Code that doesn't trigger this rule:

```js
const oneAction = array.flat();

const flattened = array.flat();

const mapped = array.map((r) => r + 1);

const mappedThenFlattened = array.flat().map((r) => r + 1);

const flatMappedWithExtra = array.map((r) => r + 1).reverse()
  .flat();

const flatWithDepth = array.map((p) => p).flat(99);
```

## Using the rule

To use this rule, your `.eslintrc.json` should at least contain the following (may look different for other config file styles):

```json
{
  "plugins": [
    "array-func"
  ],
  "rules": {
    "array-func/prefer-flat-map": "error"
  }
}
```
