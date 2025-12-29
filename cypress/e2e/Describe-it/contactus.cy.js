/// <reference types="cypress"/>

describe('test cases', () => {
    it('Verify that all mandatory fields are visible in contact us form', () => {
        cy.visit("https://automationexercise.com/contact_us")
        cy.findByDataQa('name').should("be.visible")
        cy.get("[name=csrfmiddlewaretoken]").should("be.hidden").and("exist")
        cy.findByDataQa('email').should("be.visible")
        cy.findByDataQa('subject').should("be.visible")
        cy.get("#subscribe").should("have.css","background","rgb(254, 152, 15) none repeat scroll 0% 0% / auto padding-box border-box")
    });

    it.only('', () => {
        cy.visit("https://automationexercise.com/product_details/5")
        cy.get("#quantity").should("have.value","1")
        cy.visit("https://automationexercise.com/view_cart")
        // cy.get(".cart_quantity button").should("be.disabled")

        cy.get("#empty_cart").should("contain","Cart is empty!")
        cy.get(".searchform p").should("have.text","Get the most recent updates from our site and be updated your self...")
    });

    it.only('Validate that the user can contact the company', () => {
         cy.visit("https://automationexercise.com/contact_us")
         cy.findByDataQa('name').type("Razan")
         cy.findByDataQa("email").type("eng.razanbalatiah96@gmail.com")
         cy.findByDataQa("subject").type("Testing")
         cy.findByDataQa("message").type("This is message")
         cy.findByDataQa("submit-button").click()
         cy.get(".alert-success").first().should("be.visible").and("have.text","Success! Your details have been submitted successfully.")
         cy.get(".btn-success").should("be.visible").and("contain","Home")
         cy.get(".btn-success").click()
         cy.url().should("eq","https://automationexercise.com/")
        });
});

