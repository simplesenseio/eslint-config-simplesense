(() => {
  'use strict';

  const path = require('path');
  const {
    readFile,
    writeFile,
  } = require('fs').promises;
  const baseConfig = require('../index');

  const eslintPkgPath = path.resolve(__dirname, '../node_modules/eslint/package.json');
  let eslintPkgJson = null;
  let removedExport = null;

  beforeAll(async() => {
    // a hack for now - jest 28 introduced support for module exports which causes many plugins to improprely resolve file paths
    // remove the exports from the eslint package.json
    // eslint-disable-next-line security/detect-non-literal-fs-filename
    eslintPkgJson = JSON.parse((await readFile(eslintPkgPath)).toString());
    removedExport = eslintPkgJson.exports;
    delete eslintPkgJson.exports;
    // eslint-disable-next-line security/detect-non-literal-fs-filename
    await writeFile(eslintPkgPath, JSON.stringify(eslintPkgJson, null, 2));
  });

  afterAll(async() => {
    eslintPkgJson.exports = removedExport;
    // eslint-disable-next-line security/detect-non-literal-fs-filename
    await writeFile(eslintPkgPath, JSON.stringify(eslintPkgJson, null, 2));
  });

  describe('SimpleSense Config', () => {
    it('should pass all configured file types', async() => {
      const { ESLint } = require('eslint'); // eslint-disable-line node/no-unpublished-require

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
