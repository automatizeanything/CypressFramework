class Company_Details_Page_PO{

    
    clickOnAdminTab (buttonName){

    cy.get('a[role="menuitem"]').find("span").as("MenuItems");
    cy.get("@MenuItems").contains(buttonName).click();
    }
   selectCompanyType(companyType)
   {
        cy.get("label[for='cTyp"+companyType+"']").parent("div").find("p-radiobutton").click();
   }
   enterManufacturerBasicDetails()
   {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    cy.typeAndStoreValue("input[id='externalCompanyId']", "Cy_AutoManuExtr_ID"+randomNumber, 'ExternalCompanyID_Manufacturer');


      cy.getValue('ExternalCompanyID_Manufacturer').then((value) => {
        cy.log('Stored value is: ', value);
       
     
      });

      cy.typeAndStoreValue("input[id='Name']", "Cy_AutoManuName"+randomNumber, 'CompanyName_Manufacturer');
      cy.getValue('CompanyName_Manufacturer').then((value) => {
        console.log('Stored value is: ', value);
      });
      cy.typeAndStoreValue("input[placeholder='Company Email Address']", "Cy_mail"+randomNumber+"@cycompany.com", 'CompanyName_Manufacturer');
      cy.get("input[id='file-upload']").selectFile("cypress/support/resources/Damage.jpg");
      //cy.get("label[for='file-upload']").find("span[class*='logo-preview']").should('exist');
      cy.WaitForServiceCallToComplete("inspection","POST");
      cy.get("div[class*='loading']").should('not.exist');
      cy.get("label[for='file-upload']").find("span[class*='logo-preview']").should('exist');
    
   }
   enterVehicleModelDetails()
   {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    cy.typeAndStoreValue("input[placeholder*='vehicle model']", "Cy_VehicleModel"+randomNumber, 'VehicleModel_Manufacturer');
    cy.get("span").contains("Please Add Brand").click();
    cy.get("ul[role*='listbox'] p-dropdownitem li").first().click();
    cy.get("span").contains("Please Add VIN Decoder Model").click();
    cy.get("ul[role*='listbox'] p-dropdownitem li").first().click();
    cy.get("p-radiobutton[id='itemId']").first().click();

   }

}
export default Company_Details_Page_PO;