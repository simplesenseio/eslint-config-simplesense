import config from '../../generated-configs/vue.json'; // eslint-disable-line n/no-missing-import

describe('Vue Config', () => {
  it('should match the rules snapshot', () => {
    expect(config.rules).toMatchSnapshot();
  });
});
