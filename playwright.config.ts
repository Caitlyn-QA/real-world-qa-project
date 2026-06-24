import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Keep execution predictable while the suite is small.
  fullyParallel: false,
  workers: 1,

  // Prevent accidentally committed focused tests from passing in CI.
  forbidOnly: !!process.env.CI,

  // Retry only when the project is later executed in CI.
  retries: process.env.CI ? 2 : 0,

  // Generate a local HTML report after execution.
  reporter: 'html',

  use: {
    baseURL: 'https://practicesoftwaretesting.com/',
    trace: 'on-first-retry',
    testIdAttribute: 'data-test'
  },

  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
      },
    },
  ],
});
