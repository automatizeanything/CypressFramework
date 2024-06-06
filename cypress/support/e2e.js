// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";
const addContext = require("mochawesome/addContext");

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on("test:after:run", (test, runnable) => {
  if (test.state === "failed") {
    let newRunnableTitle = "";
    let NewTestTitle = "";

    newRunnableTitle = runnable.parent.title
      .replace(/[*\"><|?:/]*/g, "")
      .replace(/\.$/g, "");
    NewTestTitle = test.title
      .replace(/([*\"><|?:/]*)/g, "")
      .replace(/\.$/g, "");

    const screenshotFileName = `${newRunnableTitle} -- ${NewTestTitle} (failed).png`;
    console.log(
      "ScreenShot path is ",
      `cypress/screenshots/${Cypress.spec.name}/${screenshotFileName}`
    );
    addContext(
      { test },
      `screenshots/${Cypress.spec.name}/${screenshotFileName}`
    );
  }
});
