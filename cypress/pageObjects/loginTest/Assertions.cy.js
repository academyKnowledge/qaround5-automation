class loginTestAssertions{
  checkLabelIsVisible(){
    cy.contains("Logged in as").should("be.visible")
    return this
  }

  checkLogoutUrlIsExitAndIsVisible(){
    cy.get("[href='/logout']").should("exist").and("be.visible")
    return this
  }

  checkValidationMessageIsVisibleAndIsContain(message){
    cy.get(".login-form form p").should("be.visible").and("contain",message)
    return this
  }
}
export default loginTestAssertions