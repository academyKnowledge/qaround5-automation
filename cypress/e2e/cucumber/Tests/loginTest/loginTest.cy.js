import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";

beforeEach(()=>{
    cy.log("This is beforeEach hook")
})

Given("The user navigate to the login page",()=>{
    cy.visit("https://automationexercise.com/login")
})

When("The user types email in email input field",()=>{
    cy.findByDataQa("login-email").type("shahdtest1@mail.com")
})

When("The user types password in password input field",()=>{
    cy.findByDataQa("login-password").clear().type("Password123!")
})

When("The user clicks on login button",()=>{
    cy.findByDataQa("login-button").click()
    // cy.screenshot()
})

When("The user types invalid email in email input field",()=>{
    cy.findByDataQa("login-email").type("shahdtest133@mail.com")
})

Then("The user will be redirected to the home page",()=>{
    cy.url().should('eq',"https://automationexercise.com/")
    cy.contains("Logged in as").should("be.visible")
    cy.get("[href='/logout']").should("exist").and("be.visible")
})

Then("The user should stay in login page",()=>{
    cy.url().should('eq',"https://automationexercise.com/login")
})

Then("A validation message {string} should shown",(message)=>{
    cy.get(".login-form form p").should("be.visible").and("contain",message)
})