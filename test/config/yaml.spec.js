(() => {
  'use strict';

  // eslint-disable-next-line n/no-missing-require
  const config = require('../../generated-configs/yaml.json');

  describe('YAML Config', () => {
    it('should match the config snapshot', () => {
      expect(config).toMatchSnapshot();
    });
  });
})();
