import { defineConfig, devices } from '@playwright/test';

module.exports = defineConfig({
    testDir: './tests', 
    timeout: 30000, 
    retries: 2, 
    reporter: 'html', 
    fullyParallel: true,
    use: {
      baseURL: process.env.URL || "https://animated-gingersnap-8cf7f2.netlify.app/", 
      headless: true, 
      viewport: { width: 1280, height: 720 }, 
      ignoreHTTPSErrors: true, 
      screenshot: 'only-on-failure', 
      video: 'retain-on-failure', 
      trace: 'on-first-retry', 
    },
    projects: [
      {
        name: 'Chromium',
        use: { browserName: 'chromium' }, 
      },
      {
        name: 'Firefox',
        use: { browserName: 'firefox' }, 
      },
      {
        name: 'WebKit',
        use: { browserName: 'webkit' }, 
      },
    ],
});