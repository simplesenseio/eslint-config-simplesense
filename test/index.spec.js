(() => {
  'use strict';

  const path = require('path');
  const baseConfig = require('../index');

  const { ESLint } = require('eslint'); // eslint-disable-line node/no-unpublished-require

  describe('SimpleSense Config', () => {
    it('should pass all configured file types', async() => {
      const linter = new ESLint({
        baseConfig,
        cwd: path.resolve(__dirname, '../'),
        fix: false,
      });
      const results = await linter.lintFiles('**/*.{js,vue,yaml,yml}');

      for (const { errorCount, warningCount } of results) {
        expect(errorCount).toStrictEqual(0);
        expect(warningCount).toStrictEqual(0);
      }
    });
  });
})();
