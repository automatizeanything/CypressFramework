/// <reference types="cypress" />
import "cypress-wait-until";
describe("Env Variable Spec", () => {
    it("Login using command method and data from Json", () => {
    cy.login( "Welcome to Vision!",Cypress.env("email"),Cypress.env("password"),"Home");

    })   
})