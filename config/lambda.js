export default [
  {
    files: [
      '**/lambda/functions/**/*.js',
      '**/lambda/functions/**/*.mjs',
      '**/lambda/layers/**/*.js',
      '**/lambda/layers/**/*.mjs',
    ],
    rules: {
      'n/no-missing-import': ['off'],
      'import/no-unresolved': [
        'error',
        {
          ignore: [String.raw `^\/opt\/nodejs\/.*\.m?js$`],
        },
      ],
    },
  },
  {
    files: ['lambda/functions/**/index.js'],
    rules: {
      'import/prefer-default-export': ['off'],
    },
  },
];
