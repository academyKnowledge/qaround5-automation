class loginTestActions {
    openLoginPage(){
        cy.visit("https://automationexercise.com/login")
        return this
    }

    typeEmailInEmailInputField(email){
         cy.findByDataQa("login-email").type(email)
         return this
    }

    typePasswordInPasswordInputField(password){
        cy.findByDataQa("login-password").clear().type(password)
        return this

    }

    clickOnSubmitButton(){
        cy.findByDataQa("login-button").click()
        return this
    }

    
}
export default loginTestActions;