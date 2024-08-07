import config from '../../generated-configs/vue.json'; // eslint-disable-line n/no-missing-import, import/no-unresolved

describe('Vue Config', () => {
  it('should match the rules snapshot', () => {
    expect(config.rules).toMatchSnapshot();
  });
});
