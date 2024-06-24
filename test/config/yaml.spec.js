import config from '../../generated-configs/yaml.json'; // eslint-disable-line n/no-missing-import

describe('YAML Config', () => {
  it('should match the rules snapshot', () => {
    expect(config.rules).toMatchSnapshot();
  });
});
