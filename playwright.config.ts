import { defineConfig } from '@playwright/test';

const widths = [
  { name: 'phone', width: 390, height: 844 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 1000 },
];
const themes = ['light', 'dark', 'system'] as const;

export default defineConfig({
  testDir: './tests/browser',
  fullyParallel: true,
  timeout: 90_000,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  workers: 2,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'http://127.0.0.1:3100',
    browserName: 'chromium',
    reducedMotion: 'reduce',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: widths.flatMap(({ name, width, height }) =>
    themes.map((theme) => ({
      name: `${name}-${theme}`,
      metadata: { theme },
      use: {
        viewport: { width, height },
        hasTouch: name !== 'desktop',
        colorScheme: theme === 'light' ? 'light' as const : 'dark' as const,
      },
    })),
  ),
  webServer: {
    command: 'node scripts/next.mjs start --hostname 127.0.0.1 --port 3100',
    url: 'http://127.0.0.1:3100',
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
});
