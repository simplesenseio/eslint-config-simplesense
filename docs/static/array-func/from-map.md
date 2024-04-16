# `from-map`

Prefer using the `mapFn` callback of `Array.from` over an immediate `.map()` call on the `Array.from` result.

`Array.from` has a `mapFn` callback that lets you map the items of the iterable to an array like you would with `.map()` except that values have not yet been truncated to fit types allowed in an array. Some iterables can't be directly converted to an array and thus have to be iterated either way. In that case using the mapping callback of `Array.from` avoids an iteration. See also [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Description) for an explanation of the potential benefits of using the mapping callback of `Array.from` directly.

This rule is auto fixable. It will produce nested function calls if you use the `Array.from` map callback and have a `.map()` call following it.

## Examples

Code that triggers this rule:

```js
Array.from(iterable).map((t) => t.id);

Array.from(iterable, (t) => t.id).map((id) => id[0]);
```

Code that doesn't trigger this rule:

```js
Array.from(iterable, (t) => t.id);

Array.from(iterable, function(t) { this.format(t); }, this);

const arr = Array.from(iterable);
const mappedArray = arr.map((t) => t.id);
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
      "array-func/from-map": "error"
    }
  }
];
```
