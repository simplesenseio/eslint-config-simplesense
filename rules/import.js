export default {
  'import/default': ['error'],
  'import/export': ['error'],
  'import/exports-last': ['error'],
  'import/extensions': [ 'error', 'ignorePackages' ],
  'import/first': ['error'],
  'import/group-exports': ['error'],
  'import/named': ['error'],
  'import/namespace': ['error'],
  'import/no-amd': ['error'],
  'import/no-anonymous-default-export': [
    'error',
    {
      allowArray: true,
      allowLiteral: true,
      allowObject: true,
    },
  ],
  'import/no-commonjs': ['error'],
  'import/no-cycle': [
    'error',
    {
      ignoreExternal: true,
    },
  ],
  'import/no-deprecated': ['error'],
  'import/no-duplicates': ['error'],
  'import/no-dynamic-require': ['error'],
  'import/no-empty-named-blocks': ['error'],
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: [
        '**/*.spec.js',
        'eslint.config.js',
        'vitest.config.js',
        'test/setup/**/*.js',
      ],
    },
  ],
  'import/no-import-module-exports': ['error'],
  'import/no-mutable-exports': ['error'],
  'import/no-named-as-default-member': ['error'],
  'import/no-named-default': ['error'],
  'import/no-self-import': ['error'],
  'import/no-unassigned-import': [
    'error',
    {
      allow: [
        '*.css',
        '**/*.css',
        '*.sass',
        '**/*.sass',
        '*.scss',
        '**/*.scss',
      ],
    },
  ],
  'import/no-unresolved': [
    'error',
    {
      ignore: ['vitest/config'],
    },
  ],
  'import/no-useless-path-segments': ['error'],
  'import/order': [
    'error',
    {
      groups: [
        'builtin',
        'external',
        'internal',
        'unknown',
        'parent',
        'sibling',
        'index',
      ],
      'newlines-between': 'always',
    },
  ],
  'import/prefer-default-export': ['off'],
};
