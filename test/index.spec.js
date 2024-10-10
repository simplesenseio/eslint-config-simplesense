import path from 'node:path';
import {
  fileURLToPath,
} from 'node:url';

import {
  ESLint,
} from 'eslint';

const DIRNAME = path.dirname(fileURLToPath(import.meta.url));
const TEST_TIMEOUT = 1000 * 20;

describe('Simplesense Config', () => {
  it('should pass all configured file types', async() => {
    const linter = new ESLint({
      cwd: path.resolve(DIRNAME, '../'),
      fix: false,
      ignorePatterns: ['test/**/*'],
    });

    const results = await linter.lintFiles(['**/*.{js,vue,yaml,yml}']);

    for (const result of results) {
      const {
        errorCount,
        warningCount,
      } = result;

      if (0 !== errorCount || 0 !== warningCount) {
        console.log(result);
      }
      expect(errorCount).toStrictEqual(0);
      expect(warningCount).toStrictEqual(0);
    }
  }, TEST_TIMEOUT);
});
