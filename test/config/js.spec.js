(() => {
  'use strict';

  // eslint-disable-next-line n/no-missing-require
  const config = require('../../generated-configs/js.json');

  describe('JS Config', () => {
    it('should match the rules snapshot', () => {
      expect(config.rules).toMatchSnapshot();
    });
  });
})();
