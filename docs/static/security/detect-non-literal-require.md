# `detect-non-literal-require`

Detects `require(variable)`, which might allow an attacker to load and run arbitrary code, or access arbitrary files on disk.

More information: [NodeJs Require Paths](http://www.bennadel.com/blog/2169-where-does-node-js-and-require-look-for-modules.htm)
