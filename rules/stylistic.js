const PADDING_STATEMENT = {
  DIRECTIVES: ['directive'],
  EXPORTS: ['export'],
  IMPORTS: ['import'],
  VARIABLES: [ 'const', 'let' ],
};

export default {
  '@stylistic/array-bracket-newline': [
    'error',
    {
      multiline: true,
    },
  ],
  '@stylistic/array-bracket-spacing': [
    'error',
    'always',
    {
      arraysInArrays: false,
      objectsInArrays: false,
      singleValue: false,
    },
  ],
  '@stylistic/array-element-newline': [
    'error',
    {
      minItems: 3,
      multiline: true,
    },
  ],
  '@stylistic/arrow-parens': [ 'error', 'always' ],
  '@stylistic/arrow-spacing': [
    'error',
    {
      after: true,
      before: true,
    },
  ],
  '@stylistic/block-spacing': [ 'error', 'always' ],
  '@stylistic/brace-style': [ 'error', '1tbs' ],
  '@stylistic/comma-dangle': [ 'error', 'always-multiline' ],
  '@stylistic/comma-spacing': ['error'],
  '@stylistic/comma-style': ['error'],
  '@stylistic/computed-property-spacing': [ 'error', 'never' ],
  '@stylistic/dot-location': [ 'error', 'property' ],
  '@stylistic/eol-last': [ 'error', 'always' ],
  '@stylistic/function-call-argument-newline': [ 'error', 'consistent' ],
  '@stylistic/function-call-spacing': [ 'error', 'never' ],
  '@stylistic/function-paren-newline': [ 'error', 'multiline' ],
  '@stylistic/generator-star-spacing': [
    'error',
    {
      after: false,
      before: true,
    },
  ],
  '@stylistic/implicit-arrow-linebreak': [ 'error', 'beside' ],
  '@stylistic/indent': [
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
      tabLength: 2,
    },
  ],
  '@stylistic/key-spacing': [
    'error',
    {
      afterColon: true,
      beforeColon: false,
      mode: 'strict',
    },
  ],
  '@stylistic/keyword-spacing': [
    'error',
    {
      after: true,
      before: true,
    },
  ],
  '@stylistic/linebreak-style': [ 'error', 'unix' ],
  '@stylistic/lines-between-class-members': [ 'error', 'always' ],
  '@stylistic/max-len': ['off'],
  '@stylistic/multiline-comment-style': [ 'error', 'separate-lines' ],
  '@stylistic/new-parens': ['error'],
  '@stylistic/newline-per-chained-call': [
    'error',
    {
      ignoreChainWithDepth: 2,
    },
  ],
  '@stylistic/no-confusing-arrow': ['error'],
  '@stylistic/no-extra-semi': ['error'],
  '@stylistic/no-floating-decimal': ['error'],
  '@stylistic/no-mixed-operators': ['error'],
  '@stylistic/no-mixed-spaces-and-tabs': ['error'],
  '@stylistic/no-multi-spaces': ['error'],
  '@stylistic/no-multiple-empty-lines': [
    'error',
    {
      max: 2,
      maxEOF: 1,
    },
  ],
  '@stylistic/no-tabs': ['error'],
  '@stylistic/no-trailing-spaces': ['error'],
  '@stylistic/no-whitespace-before-property': ['error'],
  '@stylistic/nonblock-statement-body-position': [ 'error', 'beside' ],
  '@stylistic/object-curly-newline': [
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
  '@stylistic/object-curly-spacing': [
    'error',
    'always',
    {
      arraysInObjects: false,
      objectsInObjects: false,
    },
  ],
  '@stylistic/object-property-newline': ['error'],
  '@stylistic/one-var-declaration-per-line': ['error'],
  '@stylistic/operator-linebreak': [ 'error', 'before' ],
  '@stylistic/padded-blocks': [ 'error', 'never' ],
  '@stylistic/padding-line-between-statements': [
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
  '@stylistic/quote-props': [ 'error', 'as-needed' ],
  '@stylistic/quotes': [ 'error', 'single' ],
  '@stylistic/rest-spread-spacing': [ 'error', 'never' ],
  '@stylistic/semi': [ 'error', 'always' ],
  '@stylistic/semi-spacing': [
    'error',
    {
      after: true,
      before: false,
    },
  ],
  '@stylistic/semi-style': [ 'error', 'last' ],
  '@stylistic/space-before-blocks': [ 'error', 'always' ],
  '@stylistic/space-before-function-paren': [ 'error', 'never' ],
  '@stylistic/space-in-parens': [ 'error', 'never' ],
  '@stylistic/space-infix-ops': ['error'],
  '@stylistic/space-unary-ops': [
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
  '@stylistic/spaced-comment': [ 'error', 'always' ],
  '@stylistic/switch-colon-spacing': [
    'error',
    {
      after: true,
      before: false,
    },
  ],
  '@stylistic/template-curly-spacing': [ 'error', 'always' ],
  '@stylistic/template-tag-spacing': [ 'error', 'always' ],
  '@stylistic/wrap-regex': ['error'],
  '@stylistic/yield-star-spacing': [ 'error', 'after' ],
};
