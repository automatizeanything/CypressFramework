class Home_Page_PO{

    clickOnAdminTab (buttonName){

    cy.get('a[role="menuitem"]').find("span").as("MenuItems");
    cy.get("@MenuItems").contains(buttonName).click();
    }
    clickOnanySubtab(buttonName)
    {

    }

}
export default Home_Page_PO;