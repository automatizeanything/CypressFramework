class Login_Page_PO{

    performLogin (heading, email, password,buttonName){

    cy.get(".login-des").find("p").should("contain", heading);
    cy.get('input[placeholder="Email"]').type(email);
    cy.get('input[placeholder="Password"]').type(password);
    cy.get('[label="LOGIN"]').click();
    cy.WaitForServiceCallToComplete("user","POST")
    cy.get('[role="menuitem"]').find("span").as("HomeButton");
    cy.get("@HomeButton").should("contain", buttonName);
    }

}
export default Login_Page_PO;