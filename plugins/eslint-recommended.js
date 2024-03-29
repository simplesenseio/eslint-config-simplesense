(() => {
  'use strict';

  const PADDING_STATEMENT = {
    DIRECTIVES: ['directive'],
    EXPORTS: [ 'cjs-export', 'export' ],
    IMPORTS: [ 'cjs-import', 'import' ],
    VARIABLES: [ 'const', 'let' ],
  };

  module.exports = {
    'array-bracket-newline': [
      'error', {
        multiline: true,
      },
    ],
    'array-bracket-spacing': [
      'error', 'always', {
        arraysInArrays: false,
        objectsInArrays: false,
        singleValue: false,
      },
    ],
    'array-callback-return': ['error'],
    'array-element-newline': [ 'error', 'consistent' ],
    'arrow-parens': [ 'error', 'always' ],
    'arrow-spacing': [
      'error', {
        after: true,
        before: true,
      },
    ],
    'block-scoped-var': ['error'],
    'block-spacing': [ 'error', 'always' ],
    'brace-style': [ 'error', '1tbs' ],
    camelcase: [
      'error', {
        properties: 'always',
      },
    ],
    'comma-dangle': [ 'error', 'always-multiline' ],
    'comma-spacing': ['error'],
    'comma-style': ['error'],
    'computed-property-spacing': [ 'error', 'never' ],
    'consistent-return': [
      'error', {
        treatUndefinedAsUnspecified: true,
      },
    ],
    curly: [ 'error', 'multi-line' ],
    'default-case-last': ['error'],
    'dot-location': [ 'error', 'property' ],
    'dot-notation': ['error'],
    'eol-last': [ 'error', 'always' ],
    eqeqeq: [ 'error', 'always' ],
    'for-direction': ['error'],
    'func-call-spacing': [ 'error', 'never' ],
    'generator-star-spacing': [
      'error', {
        after: false,
        before: true,
      },
    ],
    'guard-for-in': ['error'],
    indent: [
      'error', 2, {
        ArrayExpression: 1,
        CallExpression: {
          arguments: 1,
        },
        flatTernaryExpressions: true,
        FunctionDeclaration: {
          body: 1,
          parameters: 1,
        },
        FunctionExpression: {
          body: 1,
          parameters: 1,
        },
        ignoredNodes: ['ConditionalExpression'],
        ImportDeclaration: 1,
        ObjectExpression: 1,
        outerIIFEBody: 1,
        SwitchCase: 1,
        MemberExpression: 1,
      },
    ],
    'key-spacing': [
      'error', {
        afterColon: true,
        beforeColon: false,
        mode: 'strict',
      },
    ],
    'keyword-spacing': [
      'error', {
        after: true,
        before: true,
      },
    ],
    'linebreak-style': [ 'error', 'unix' ],
    'lines-between-class-members': [ 'error', 'always' ],
    'max-classes-per-file': [ 'error', 1 ],
    'max-len': ['off'],
    'new-cap': ['error'],
    'new-parens': ['error'],
    'newline-per-chained-call': [
      'error', {
        ignoreChainWithDepth: 2,
      },
    ],
    'no-array-constructor': ['error'],
    'no-async-promise-executor': ['error'],
    'no-caller': ['error'],
    'no-confusing-arrow': ['error'],
    'no-constant-condition': ['error'],
    'no-constructor-return': ['error'],
    'no-continue': ['error'],
    'no-duplicate-imports': ['error'],
    'no-else-return': ['error'],
    'no-empty-character-class': ['error'],
    'no-empty-function': ['error'],
    'no-eq-null': ['error'],
    'no-eval': ['error'],
    'no-extend-native': ['error'],
    'no-extra-bind': ['error'],
    'no-floating-decimal': ['error'],
    'no-implicit-globals': ['error'],
    'no-implied-eval': ['error'],
    'no-invalid-this': ['error'],
    'no-labels': ['error'],
    'no-lone-blocks': ['error'],
    'no-lonely-if': ['error'],
    'no-loss-of-precision': ['error'],
    'no-mixed-operators': ['error'],
    'no-multi-assign': ['error'],
    'no-multi-spaces': ['error'],
    'no-multi-str': ['error'],
    'no-multiple-empty-lines': ['error'],
    'no-new-func': ['error'],
    'no-new-object': ['error'],
    'no-new-wrappers': ['error'],
    'no-new': ['error'],
    'no-nonoctal-decimal-escape': ['error'],
    'no-octal-escape': ['error'],
    'no-proto': ['error'],
    'no-return-assign': ['error'],
    'no-sequences': ['error'],
    'no-shadow': ['error'],
    'no-tabs': ['error'],
    'no-template-curly-in-string': ['error'],
    'no-throw-literal': ['error'],
    'no-trailing-spaces': ['error'],
    'no-undef-init': ['error'],
    'no-underscore-dangle': [
      'error', {
        allowAfterSuper: true,
        allowAfterThis: true,
        enforceInMethodNames: false,
      },
    ],
    'no-unneeded-ternary': ['error'],
    'no-unreachable-loop': ['error'],
    'no-unsafe-negation': ['error'],
    'no-unsafe-optional-chaining': ['error'],
    'no-unused-vars': [
      'error', {
        args: 'none',
      },
    ],
    'no-useless-backreference': ['error'],
    'no-useless-call': ['error'],
    'no-useless-computed-key': ['error'],
    'no-useless-concat': ['error'],
    'no-useless-constructor': ['error'],
    'no-useless-rename': ['error'],
    'no-useless-return': ['error'],
    'no-var': ['error'],
    'no-void': ['error'],
    'no-warning-comments': ['error'],
    'no-whitespace-before-property': ['error'],
    'no-with': ['error'],
    'nonblock-statement-body-position': [ 'error', 'beside' ],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 1,
        },
        ObjectPattern: {
          consistent: true,
          minProperties: 1,
        },
        ImportDeclaration: 'always',
        ExportDeclaration: 'always',
      },
    ],
    'object-curly-spacing': [
      'error', 'always', {
        arraysInObjects: false,
        objectsInObjects: false,
      },
    ],
    'object-property-newline': ['error'],
    'object-shorthand': ['error'],
    'one-var-declaration-per-line': ['error'],
    'one-var': [ 'error', 'never' ],
    'operator-linebreak': [ 'error', 'before' ],
    'padded-blocks': [ 'error', 'never' ],
    'padding-line-between-statements': [
      'error', {
        blankLine: 'always',
        prev: PADDING_STATEMENT.DIRECTIVES,
        next: '*',
      }, {
        blankLine: 'any',
        prev: PADDING_STATEMENT.DIRECTIVES,
        next: PADDING_STATEMENT.DIRECTIVES,
      }, {
        blankLine: 'always',
        prev: PADDING_STATEMENT.VARIABLES,
        next: '*',
      }, {
        blankLine: 'any',
        prev: PADDING_STATEMENT.VARIABLES,
        next: PADDING_STATEMENT.VARIABLES,
      }, {
        blankLine: 'always',
        prev: PADDING_STATEMENT.IMPORTS,
        next: '*',
      }, {
        blankLine: 'any',
        prev: PADDING_STATEMENT.IMPORTS,
        next: PADDING_STATEMENT.IMPORTS,
      }, {
        blankLine: 'always',
        prev: '*',
        next: PADDING_STATEMENT.EXPORTS,
      }, {
        blankLine: 'any',
        prev: PADDING_STATEMENT.EXPORTS,
        next: PADDING_STATEMENT.EXPORTS,
      },
    ],
    'prefer-const': [
      'error', {
        destructuring: 'all',
      },
    ],
    'prefer-promise-reject-errors': ['error'],
    'prefer-rest-params': ['error'],
    'prefer-spread': ['error'],
    'prefer-template': ['error'],
    'quote-props': [ 'error', 'as-needed' ],
    quotes: [ 'error', 'single' ],
    radix: ['error'],
    'require-yield': ['error'],
    'rest-spread-spacing': [ 'error', 'never' ],
    'semi-spacing': [
      'error', {
        after: true,
        before: false,
      },
    ],
    'semi-style': [ 'error', 'last' ],
    semi: [ 'error', 'always' ],
    'sort-imports': 'off',
    'sort-vars': [
      'error', {
        ignoreCase: false,
      },
    ],
    'space-before-blocks': [ 'error', 'always' ],
    'space-before-function-paren': [ 'error', 'never' ],
    'space-in-parens': [ 'error', 'never' ],
    'space-infix-ops': ['error'],
    'space-unary-ops': [
      'error', {
        nonwords: true,
        words: true,
        overrides: {
          '!': false,
          '+': false,
          '-': false,
          '++': false,
          '--': false,
        },
      },
    ],
    'spaced-comment': [ 'error', 'always' ],
    strict: [ 'error', 'function' ],
    'switch-colon-spacing': [
      'error', {
        after: true,
        before: false,
      },
    ],
    'symbol-description': ['error'],
    'template-curly-spacing': [ 'error', 'always' ],
    'template-tag-spacing': [ 'error', 'always' ],
    'valid-typeof': [
      'error', {
        requireStringLiterals: true,
      },
    ],
    'wrap-iife': [ 'error', 'outside' ],
    'wrap-regex': ['error'],
    'yield-star-spacing': [ 'error', 'after' ],
    yoda: ['off'],
  };
})();
