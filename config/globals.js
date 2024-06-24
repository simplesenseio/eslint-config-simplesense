import globals from 'globals';

const vitest = {
  vi: true,
  describe: true,
  it: true,
  expect: true,
  beforeEach: true,
  afterEach: true,
  beforeAll: true,
  afterAll: true,
  spyFn: true,
};

export default {
  ...globals.browser,
  ...globals.es2021,
  ...globals.es6,
  ...globals.node,
  ...vitest,
};
