/// <reference types="cypress" />
import Login_Page_PO from '../support/PageObjects/login_Page_PO.js';
import Home_Page_PO from '../support/PageObjects/Home_Page_PO.js';
import "cypress-wait-until";

describe("Validate the Login flow", () => {
  it("Login using Valid User Name and Password", () => {
    const login_Page_PO = new Login_Page_PO();
    const home_Page_PO = new Home_Page_PO();
    cy.NavigateToBasePage();
    login_Page_PO.performLogin("Welcome to Vision!",Cypress.env("email"),Cypress.env("password"),"Home");
    home_Page_PO.clickOnAdminTab("Administration");
    cy.pause();
  });
});
