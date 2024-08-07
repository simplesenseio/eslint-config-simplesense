import config from '../../generated-configs/js.json'; // eslint-disable-line n/no-missing-import, import/no-unresolved

describe('JS Config', () => {
  it('should match the rules snapshot', () => {
    expect(config.rules).toMatchSnapshot();
  });
});
