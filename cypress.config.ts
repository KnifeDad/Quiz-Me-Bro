import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3001',
    supportFile: 'cypress/support/e2e.ts',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: {
        configFile: 'client/vite.config.ts',
      },
    },
    supportFile: 'cypress/support/component.ts',
    specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx}',
    indexHtmlFile: 'cypress/support/component-index.html',
    experimentalSingleTabRunMode: true,
  },
  // Add retry on failure
  retries: {
    runMode: 2,
    openMode: 0,
  },
  // Add experimental features
  experimentalInteractiveRunEvents: true,
  experimentalSourceRewriting: true,
  // Add custom plugin for component testing
  setupNodeEvents(on, config) {
    // Load the custom plugin
    require('./cypress/plugins/component-testing.js')(on, config);
    return config;
  },
});