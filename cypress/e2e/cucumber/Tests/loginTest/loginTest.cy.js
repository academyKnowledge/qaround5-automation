import { Given , When , Then, Before ,After } from "cypress-cucumber-preprocessor/steps";

beforeEach(()=>{
    cy.log("This is beforeEach hook")
})

// Before({tags:"@TC-7689"},()=>{
//     cy.screenshot()
// })

// Before({tags:"@TC-7689 or @TC-4567"},()=>{
//     cy.screenshot()
// })

// Before({tags:"@area1 and @TC-4567"},()=>{
//     cy.screenshot()
// })

// Before({tags:"not @TC-4567"},()=>{
//     cy.screenshot()
// })

Given("The user navigate to the login page",()=>{
    cy.visit("https://automationexercise.com/login")
})

When("The user types {string} in email input field",(email)=>{
    cy.findByDataQa("login-email").type(email)
})

When("The user types {word} in password input field",(password)=>{
    cy.findByDataQa("login-password").clear().type(password)
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