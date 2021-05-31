# `avoid-reverse`

Avoid reversing the array and running a method on it if there is an equivalent
of the method operating on the array from the other end.

There are two operations with such equivalents: `reduce` with `reduceRight`.

This rule is auto fixable.

## Examples

Code that triggers this rule:

```js
const string = array.reduceRight((p, c) => p + c, '');

const reverseString = array.reduce((p, c) => p + c, '');
```

Code that doesn't trigger this rule:

```js
const reverseString = array.reduce((p, c) => p + c, '');

const string = array.reduceRight((p, c) => p + c, '');

const reverseArray = array.reverse();

const reverseMap = array.reverse().map((r) => r + 1);
```

## Using the rule

To use this rule, your `.eslintrc.json` should at least contain the following (may look different for other config file styles):

```json
{
  "plugins": [
    "array-func"
  ],
  "rules": {
    "array-func/avoid-reverse": "error"
  }
}
```
