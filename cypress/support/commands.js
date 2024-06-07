// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("NavigateToBasePage", () => {
  cy.visit("/");
});

Cypress.Commands.add("WaitForServiceCallToComplete", (url, methodType) => {
  cy.intercept({
    url: "**/" + url + "/**",
    method: methodType,
  }).as("PageLoad");
  cy.wait("@PageLoad");
});

Cypress.Commands.add("ClickOnAnyTab", (buttonName) => {
  cy.get("a[routerlinkactive='active-menuitem-routerlink']")
    .find("span")
    .as("TabItems");
  cy.get("@TabItems").contains(buttonName).click();
});

Cypress.Commands.add("ClickOnAnySubTab", (buttonName) => {
  cy.get("div[class='layout-menu-container'] a span[class*='layout-menuitem']").as("SubMenu");
  cy.get("@SubMenu").contains(buttonName).click();
});

Cypress.Commands.add("ClickOnSpanButton", (buttonName) => {
  cy.get("span[class*='button-label']").as("button");
  cy.get("@button").contains(buttonName).click();
});


Cypress.Commands.add('typeAndStoreValue', (locator, data, alias) => {
  cy.get(locator).type(data).invoke('val').then((value) => {
    cy.wrap(value).as(alias);
  });
});


Cypress.Commands.add('setValue', (key, value) => {
  cy.wrap(value).as(key);
});

Cypress.Commands.add('getValue', (key) => {
  cy.get(`@${key}`);
});

Cypress.Commands.add("selectValueFromDropDown", (locator,dropDownValue) => {
  cy.get("span[class*='button-label']").as("button");
  cy.get("@button").contains(buttonName).click();
});


