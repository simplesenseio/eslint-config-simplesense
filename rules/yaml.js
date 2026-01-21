export default {
  'yml/block-sequence': [ 'error', 'always' ],
  'yml/file-extension': [
    'error',
    {
      extension: 'yaml',
      caseSensitive: true,
    },
  ],
  'yml/indent': [
    'error',
    2,
    {
      indentBlockSequences: true,
    },
  ],
  'yml/no-empty-document': ['off'],
  'yml/no-multiple-empty-lines': ['off'],
  'yml/no-trailing-zeros': ['off'],
  'yml/quotes': [
    'error',
    {
      prefer: 'single',
    },
  ],
};
