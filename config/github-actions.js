export default [
  {
    name: 'simplesense/github-actions',
    files: ['.github/**/*.js'],
    rules: {
      'import/no-unresolved': [
        'error',
        {
          ignore: [String.raw `\/actions\/util\/`],
        },
      ],
      'n/no-missing-import': ['off'],
    },
  },
];
