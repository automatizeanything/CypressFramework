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

Cypress.Commands.add("login", (heading, email, password,buttonName) => {
    cy.visit("/");
    cy.get(".login-des").find("p").should("contain", heading);
    cy.get('input[placeholder="Email"]').type(email);
    cy.get('input[placeholder="Password"]').type(password);
    cy.get('[label="LOGIN"]').click();
    cy.WaitForServiceCallToComplete("user","POST")
    cy.get('[role="menuitem"]').find("span").as("HomeButton");
    cy.get("@HomeButton").should("contain", "Home");
  });
   
  Cypress.Commands.add("WaitForServiceCallToComplete",(url,methodType)=>
      {
    cy.intercept({
     url: "**/"+url+"/**",
     method: methodType,
    }).as("PageLoad");
    cy.wait("@PageLoad");
  })