# `detect-non-literal-regexp`

Detects `RegExp(variable)`, which might allow an attacker to DOS your server with a long-running regular expression.

More information: [Regex DOS and Node](https://github.com/nodesecurity/eslint-plugin-security/blob/master/docs/regular-expression-dos-and-node.md)
