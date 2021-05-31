# `no-unnecessary-this-arg`

Avoid the `this` parameter when providing arrow function as callback in array functions.

The `this` parameter is useless when providing arrow functions, since the `this` of arrow functions can not be rebound, thus the parameter has no effect.

The fix is usually to omit the parameter. The Array methods can't be auto-fixed, since the detection of array methods is not confident enough to know that the method is being called on an array.

## Checked Functions

- `from` (fixable)

## Checked Methods

- `every`
- `filter`
- `find`
- `findIndex`
- `forEach`
- `map`
- `some`

## Examples

Code that triggers this rule:

```js
const array = Array.from('example', (char) => char.charCodeAt(0));

const e = array.find((char) => char === 101, this);

const exampleAsArray = array.map((char) => String.fromCharCode(char), this);

const eIndex = array.findIndex((char) => char === 101, this);

const containsE = array.some((char) => char === 101, this);

const isOnlyE = array.every((char) => char === 101, this);

const onlyEs = array.filter((char) => char === 101, this);

array.forEach((char) => console.log(char), this);
```

Code that doesn't trigger this rule:

```js
const array = Array.from('example', (char) => char.charCodeAt(0));
const alternateArray = Array.from('example', function(char) {
  return char.charCodeAt(this);
}, 0);

const e = array.find((char) => char === 101);

const exampleAsArray = array.map((char) => String.fromCharCode(char));

const eIndex = array.findIndex((char) => char === 101);

const containsE = array.some((char) => char === 101);

const isOnlyE = array.every((char) => char === 101);

const onlyEs = array.filter(function(char) {
  return char === this;
}, 101);

array.forEach(function(char) {
  this.log(char);
}, console);

array.filter(this.isGood, this);
```

## Using the rule

To use this rule, your `.eslintrc.json` should at least contain the following (may look different for other config file styles):

```json
{
  "plugins": [
    "array-func"
  ],
  "rules": {
    "array-func/no-unnecessary-this-arg": "error"
  }
}
```
