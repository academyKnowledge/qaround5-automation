/// <reference types="cypress"/>
import { Given , When , Then  } from "cypress-cucumber-preprocessor/steps";

Given("The user navigates to contact us page",()=>{
    cy.visit("https://automationexercise.com/contact_us")
})

When("The user types {word} in email input field",(email)=>{
    cy.get("#susbscribe_email").type(email)
})

When("The user clicks on arrow button",()=>{
    cy.get("#subscribe").click()
})

Then("A message {string} should shown",(message)=>{
    cy.get("#success-subscribe").should("be.visible").and("contain",message)
})