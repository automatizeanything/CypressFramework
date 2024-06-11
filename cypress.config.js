const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '1fid1m',
  video: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  screenshotsFolder: "mochawesome-report/screenshots",
  videosFolder: "cypress/videos",

  e2e: {
    baseUrl: "https://test.gid.trivand.com/#/login",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    experimentalModifyObstructiveThirdPartyCode: true,
    defaultCommandTimeout: 12000,
    requestTimeout: 10000,
    setupNodeEvents(on, config) {},

    reporter: "cypress-multi-reporters",
    reporterOptions: {
      configFile: "reporter-config.json",
    },
  },
  env: {
    email: "admin@trivand.com",
    password: "24V43uEt2s9sdeRU",
  },
});
