(() => {
  'use strict';

  module.exports = {
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
    'yml/quotes': [
      'error', {
        prefer: 'single',
      },
    ],
  };
})();
