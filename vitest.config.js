import {
  defineConfig,
} from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      enabled: true,
      exclude: [
        'docs/**/*',
        'filetypes/**/*',
        'helpers/**/*',
        'scripts/**/*',
        'test/**/*',
        'vitest.config.js',
      ],
      reporter: [
        'json-summary',
        'lcov',
        'text',
      ],
      provider: 'v8',
    },
    environment: 'node',
    reporters: ['verbose'],
  },
});
