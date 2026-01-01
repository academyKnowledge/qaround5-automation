import { Given } from "cypress-cucumber-preprocessor/steps";

Given("The user navigate to home page",()=>{
    cy.visit("https://automationexercise.com/login")

    // cy.get(".navbar-nav li a").first().invoke('text') // Home
})

Given("Print the menu items",()=>{
     cy.get(".navbar-nav li a").then((items)=>{
        for (let i = 0; i < items.length; i++) {
            cy.wrap(items[i]).invoke('text').then((itemName)=>{
                cy.log(itemName)
           })
        }
    })
})