import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    specPattern: '**/*.cy.ts',
    viewportWidth: 1920,
    viewportHeight: 1080,
    env: {
      username: "standard_user",
      password: "secret_sauce",
      dataTag: "data-test",
      hideXHR: true
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
