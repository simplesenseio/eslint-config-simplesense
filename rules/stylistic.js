const PADDING_STATEMENT = {
  DIRECTIVES: ['directive'],
  EXPORTS: ['export'],
  IMPORTS: ['import'],
  VARIABLES: [ 'const', 'let' ],
};

export default {
  '@stylistic/js/array-bracket-newline': [
    'error',
    {
      multiline: true,
    },
  ],
  '@stylistic/js/array-bracket-spacing': [
    'error',
    'always',
    {
      arraysInArrays: false,
      objectsInArrays: false,
      singleValue: false,
    },
  ],
  '@stylistic/js/array-element-newline': [
    'error',
    {
      minItems: 3,
      multiline: true,
    },
  ],
  '@stylistic/js/arrow-parens': [ 'error', 'always' ],
  '@stylistic/js/arrow-spacing': [
    'error',
    {
      after: true,
      before: true,
    },
  ],
  '@stylistic/js/block-spacing': [ 'error', 'always' ],
  '@stylistic/js/brace-style': [ 'error', '1tbs' ],
  '@stylistic/js/comma-dangle': [ 'error', 'always-multiline' ],
  '@stylistic/js/comma-spacing': ['error'],
  '@stylistic/js/comma-style': ['error'],
  '@stylistic/js/computed-property-spacing': [ 'error', 'never' ],
  '@stylistic/js/dot-location': [ 'error', 'property' ],
  '@stylistic/js/eol-last': [ 'error', 'always' ],
  '@stylistic/js/function-call-argument-newline': [ 'error', 'consistent' ],
  '@stylistic/js/func-call-spacing': [ 'error', 'never' ],
  '@stylistic/js/function-paren-newline': [ 'error', 'multiline' ],
  '@stylistic/js/generator-star-spacing': [
    'error',
    {
      after: false,
      before: true,
    },
  ],
  '@stylistic/js/implicit-arrow-linebreak': [ 'error', 'beside' ],
  '@stylistic/js/indent': [
    'error',
    2,
    {
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
      StaticBlock: {
        body: 1,
      },
      SwitchCase: 1,
      MemberExpression: 1,
    },
  ],
  '@stylistic/js/key-spacing': [
    'error',
    {
      afterColon: true,
      beforeColon: false,
      mode: 'strict',
    },
  ],
  '@stylistic/js/keyword-spacing': [
    'error',
    {
      after: true,
      before: true,
    },
  ],
  '@stylistic/js/linebreak-style': [ 'error', 'unix' ],
  '@stylistic/js/lines-between-class-members': [ 'error', 'always' ],
  '@stylistic/js/max-len': ['off'],
  '@stylistic/js/multiline-comment-style': [ 'error', 'separate-lines' ],
  '@stylistic/js/new-parens': ['error'],
  '@stylistic/js/newline-per-chained-call': [
    'error',
    {
      ignoreChainWithDepth: 2,
    },
  ],
  '@stylistic/js/no-confusing-arrow': ['error'],
  '@stylistic/js/no-extra-semi': ['error'],
  '@stylistic/js/no-floating-decimal': ['error'],
  '@stylistic/js/no-mixed-operators': ['error'],
  '@stylistic/js/no-mixed-spaces-and-tabs': ['error'],
  '@stylistic/js/no-multi-spaces': ['error'],
  '@stylistic/js/no-multiple-empty-lines': [
    'error',
    {
      max: 2,
      maxEOF: 1,
    },
  ],
  '@stylistic/js/no-tabs': ['error'],
  '@stylistic/js/no-trailing-spaces': ['error'],
  '@stylistic/js/no-whitespace-before-property': ['error'],
  '@stylistic/js/nonblock-statement-body-position': [ 'error', 'beside' ],
  '@stylistic/js/object-curly-newline': [
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
  '@stylistic/js/object-curly-spacing': [
    'error',
    'always',
    {
      arraysInObjects: false,
      objectsInObjects: false,
    },
  ],
  '@stylistic/js/object-property-newline': ['error'],
  '@stylistic/js/one-var-declaration-per-line': ['error'],
  '@stylistic/js/operator-linebreak': [ 'error', 'before' ],
  '@stylistic/js/padded-blocks': [ 'error', 'never' ],
  '@stylistic/js/padding-line-between-statements': [
    'error',
    {
      blankLine: 'always',
      prev: PADDING_STATEMENT.DIRECTIVES,
      next: '*',
    },
    {
      blankLine: 'any',
      prev: PADDING_STATEMENT.DIRECTIVES,
      next: PADDING_STATEMENT.DIRECTIVES,
    },
    {
      blankLine: 'always',
      prev: PADDING_STATEMENT.VARIABLES,
      next: '*',
    },
    {
      blankLine: 'any',
      prev: PADDING_STATEMENT.VARIABLES,
      next: PADDING_STATEMENT.VARIABLES,
    },
    {
      blankLine: 'always',
      prev: PADDING_STATEMENT.IMPORTS,
      next: '*',
    },
    {
      blankLine: 'any',
      prev: PADDING_STATEMENT.IMPORTS,
      next: PADDING_STATEMENT.IMPORTS,
    },
    {
      blankLine: 'always',
      prev: '*',
      next: PADDING_STATEMENT.EXPORTS,
    },
    {
      blankLine: 'any',
      prev: PADDING_STATEMENT.EXPORTS,
      next: PADDING_STATEMENT.EXPORTS,
    },
  ],
  '@stylistic/js/quote-props': [ 'error', 'as-needed' ],
  '@stylistic/js/quotes': [ 'error', 'single' ],
  '@stylistic/js/rest-spread-spacing': [ 'error', 'never' ],
  '@stylistic/js/semi': [ 'error', 'always' ],
  '@stylistic/js/semi-spacing': [
    'error',
    {
      after: true,
      before: false,
    },
  ],
  '@stylistic/js/semi-style': [ 'error', 'last' ],
  '@stylistic/js/space-before-blocks': [ 'error', 'always' ],
  '@stylistic/js/space-before-function-paren': [ 'error', 'never' ],
  '@stylistic/js/space-in-parens': [ 'error', 'never' ],
  '@stylistic/js/space-infix-ops': ['error'],
  '@stylistic/js/space-unary-ops': [
    'error',
    {
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
  '@stylistic/js/spaced-comment': [ 'error', 'always' ],
  '@stylistic/js/switch-colon-spacing': [
    'error',
    {
      after: true,
      before: false,
    },
  ],
  '@stylistic/js/template-curly-spacing': [ 'error', 'always' ],
  '@stylistic/js/template-tag-spacing': [ 'error', 'always' ],
  '@stylistic/js/wrap-regex': ['error'],
  '@stylistic/js/yield-star-spacing': [ 'error', 'after' ],
};
