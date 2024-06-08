/// <reference types="cypress" />
import Login_Page_PO from "../support/PageObjects/login_Page_PO.js";
import Home_Page_PO from "../support/PageObjects/Home_Page_PO.js";
import Territories_PO from "../support/PageObjects/Territories_PO.js";
import Company_Details_Page_PO from "../support/PageObjects/Company_Details_Page_PO.js";
import "cypress-wait-until";

describe("Validating All Manufacturer Flows", () => {
  const login_Page_PO = new Login_Page_PO();
  const home_Page_PO = new Home_Page_PO();
  const territories_PO = new Territories_PO();
  const company_Details_Page_PO = new Company_Details_Page_PO();
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

  it("Add a New Manufacturer", () => {
    cy.ClickOnAnySubTab("Company");
    company_Details_Page_PO.selectCompanyType("Manufacturer");
    company_Details_Page_PO.enterManufacturerBasicDetails();
    cy.ClickOnSpanButton("Next");
    company_Details_Page_PO.enterVehicleModelDetails();
    cy.ClickOnSpanButton("Add");
    cy.ClickOnSpanButton("Save");
    company_Details_Page_PO.searchForCompaniesAssertAndClick();
    company_Details_Page_PO.verifyBasicDetailsOfCompany();
    cy.pause();
  });
});
