class Company_Details_Page_PO {
  clickOnAdminTab(buttonName) {
    cy.get('a[role="menuitem"]').find("span").as("MenuItems");
    cy.get("@MenuItems").contains(buttonName).click();
  }
  selectCompanyType(companyType) {
    cy.get("label[for='cTyp" + companyType + "']")
      .parent("div")
      .find("p-radiobutton")
      .click();
  }
  enterManufacturerBasicDetails() {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    cy.typeAndStoreValue(
      "input[id='externalCompanyId']",
      "Cy_AutoManuExtr_ID" + randomNumber,
      "ExternalCompanyID_Manufacturer"
    );

    cy.getValue("ExternalCompanyID_Manufacturer").then((value) => {
      cy.log("Stored value is: ", value);
    });

    cy.typeAndStoreValue(
      "input[id='Name']",
      "Cy_AutoManuName" + randomNumber,
      "CompanyName_Manufacturer"
    );
    cy.getValue("CompanyName_Manufacturer").then((value) => {
      console.log("Stored value is: ", value);
    });
    cy.typeAndStoreValue(
      "input[placeholder='Company Email Address']",
      "cy_mail" + randomNumber + "@cycompany.com",
      "CompanyEmail_Manufacturer"
    );
    cy.get("input[id='file-upload']").selectFile(
      "cypress/support/resources/Damage.jpg"
    );
    //cy.get("label[for='file-upload']").find("span[class*='logo-preview']").should('exist');
    cy.WaitForServiceCallToComplete("inspection", "POST");
    cy.get("div[class*='loading']").should("not.exist");
    cy.get("label[for='file-upload']")
      .find("span[class*='logo-preview']")
      .should("exist");
  }
  enterVehicleModelDetails() {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    cy.typeAndStoreValue(
      "input[placeholder*='vehicle model']",
      "Cy_VehicleModel" + randomNumber,
      "VehicleModel_Manufacturer"
    );
    cy.get("span").contains("Please Add Brand").click();
    cy.get("ul[role*='listbox'] p-dropdownitem li").first().click();
    cy.get("span").contains("Please Add VIN Decoder Model").click();
    cy.get("ul[role*='listbox'] p-dropdownitem li").first().click();
    cy.get("p-radiobutton[id='itemId']").first().click();
  }

  searchForCompaniesAssertAndClick() {
    cy.getValue("CompanyName_Manufacturer").then((value) => {
      cy.log("CompanyName_Manufacturer Stored value is: ", value);
      cy.get(".block > .p-inputtext").type(value);
      cy.get("table[role='table'] td span")
        .contains("Name")
        .as("ListOfCompanies");
      cy.get("@ListOfCompanies").next().should("have.text", value);
      cy.get("@ListOfCompanies").next().click();
      cy.get("div[class*='loading']").should("not.exist");
    });
  }

  verifyBasicDetailsOfCompany() {
    const listSelector = cy
      .get("div[class*='field-row basic_details']")
      .next()
      .find("div label");
    cy.getValue("ExternalCompanyID_Manufacturer").then((value) => {
      cy.searchElementInList(listSelector, value);
    });
    cy.getValue("CompanyName_Manufacturer").then((value) => {
      cy.searchElementInList(listSelector, value);
    });
    cy.getValue("CompanyEmail_Manufacturer").then((value) => {
      cy.get("label")
        .contains(" Company Email Address")
        .parent("div")
        .next()
        .find("li")
        .first()
        .contains(value);
    });
  }
}
export default Company_Details_Page_PO;
