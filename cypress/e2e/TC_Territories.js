/// <reference types="cypress" />
import Login_Page_PO from "../support/PageObjects/login_Page_PO.js";
import Home_Page_PO from "../support/PageObjects/Home_Page_PO.js";
import Territories_PO from "../support/PageObjects/Territories_PO.js";
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
    territories_PO.enterNewTerritoryAndHandOverPointDetails("Mumbai","Delhi");
    territories_PO.verifyCreatedTerritory("Mumbai")
    cy.pause();
  });
});
