/// <reference types="cypress" />
import Login_Page_PO from "/cypress/support/PageObjects/Login_Page_PO.js";
import Home_Page_PO from "/cypress/support/PageObjects/Home_Page_PO.js";
import Territories_PO from "/cypress/support/PageObjects/Territories_PO.js";
import "cypress-wait-until";

describe("Validating Territory Flow", () => {
  const login_Page_PO = new Login_Page_PO();
  const home_Page_PO = new Home_Page_PO();
  const territories_PO = new Territories_PO();

  before(function () {
    cy.NavigateToBasePage();
    login_Page_PO.performLogin(
      "Welcome to Vision!",
      Cypress.env("email"),
      Cypress.env("password"),
      "Home"
    );
    home_Page_PO.clickOnAdminTab("Administration");
  });

  it("Add a New Territory with Handover Points", () => {
    territories_PO.clickOnAddNewTerritoryButton();
    territories_PO.enterNewTerritoryAndHandOverPointDetails("Mumbai11","Delhi11");
    territories_PO.verifyCreatedTerritory("Mumbai11")
    //cy.pause();
  });
});
