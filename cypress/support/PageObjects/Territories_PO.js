class Territories_PO {
  clickOnAddNewTerritoryButton() {
    cy.get("button[ptooltip='Add']").click();
  }
  enterNewTerritoryAndHandOverPointDetails(TerritoryName,HandOverPoint)
  {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    cy.typeAndStoreValue(
      "input[placeholder*='Enter Territory Name']",
      TerritoryName + randomNumber,
      "TerritoryName_Manufacturer"
    );

    //cy.get("input[placeholder*='Enter Territory Name']").type(TerritoryName+randomNumber);
    cy.get("input[id='Name']").next().click();
    cy.get("input[placeholder*='Add Handover Points' ][ id='data']").type(HandOverPoint);
    cy.get('.input-outer > .pi-plus').click();
    cy.get('.ng-tns-c68-21.p-dialog-mask > .ng-trigger > .p-dialog-footer > .p-t-modal-footer > [styleclass="p-button-primary"] > .p-ripple > .p-button-label').click();
    cy.get('button span').contains("Done").click();
    cy.get("div[class*='loading']").should("not.exist");

  }
  verifyCreatedTerritory()
  {
    cy.ClickOnAnySubTab("Company");
    cy.get("div[class*='loading']").should("not.exist");
    cy.ClickOnAnySubTab("Territories");
    cy.get("div[class*='loading']").should("not.exist");
    cy.getValue("TerritoryName_Manufacturer").then((value) => {
    cy.log("TerritoryName_Manufacturer Stored value is: ", value);
    cy.get(".block > .p-inputtext").type(value);
    cy.get("div[class='card all-companies-card'] div label").should('contain',value);
  }
)}
}
export default Territories_PO;
