class Territories_PO {
  clickOnAddNewTerritoryButton() {
    cy.get("button[ptooltip='Add']").click();
  }
  enterNewTerritoryAndHandOverPointDetails(TerritoryName,HandOverPoint)
  {
    cy.get("input[placeholder*='Enter Territory Name']").type(TerritoryName);
    cy.get("input[id='Name']").next().click();
    cy.get("input[placeholder*='Add Handover Points' ][ id='data']").type(HandOverPoint);
    cy.get('.input-outer > .pi-plus').click();
    cy.get('.ng-tns-c68-21.p-dialog-mask > .ng-trigger > .p-dialog-footer > .p-t-modal-footer > [styleclass="p-button-primary"] > .p-ripple > .p-button-label').click();
    cy.get('button span').contains("Done").click();

  }
  verifyCreatedTerritory(TerritoryName)
  {
    cy.get(".block > .p-inputtext").type(TerritoryName);
    cy.get("div[class='card all-companies-card'] div label").should('have.text',TerritoryName);
  }
}
export default Territories_PO;
