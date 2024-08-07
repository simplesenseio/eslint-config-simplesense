import config from '../../generated-configs/yaml.json'; // eslint-disable-line n/no-missing-import, import/no-unresolved

describe('YAML Config', () => {
  it('should match the rules snapshot', () => {
    expect(config.rules).toMatchSnapshot();
  });
});
