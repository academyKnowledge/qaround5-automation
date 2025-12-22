/// <reference types="cypress"/>
describe('sign up', () => {
    it('Verify that all mandatory fields are visible in sign up form', () => {
        cy.visit("https://sauce-demo.myshopify.com/account/register")
        cy.get("#breadcrumb").should("be.visible")
        cy.get("#breadcrumb a").contains("Home").should("be.visible")
        cy.contains("a","Register").should("be.visible")
        cy.get(".accounts-title").should("be.visible")
        cy.get("[for=first_name]").should("be.visible")
        cy.get("[for=last_name]").should("be.visible")
        cy.get("[for=email]").should("be.visible")
        cy.get("[for=password]").should("be.visible")
        cy.get("#first_name").should("be.visible")
        cy.get("#last_name").should("be.visible")
        cy.get("#email").should("be.visible")
        cy.get("#password").should("be.visible")
        cy.get("[value=Create]").should("be.visible")
    });

    it.only('Validate that the user can create a new account', () => {
        cy.visit("https://sauce-demo.myshopify.com/account/register")
        cy.get("#first_name").type("Razan")
        cy.get("#last_name").type("Balatiah")
        cy.get("#email").type("eng.razanbalatiah@gmail.com")
        cy.get("#password").type("test@123")
        cy.get("[value=Create]").click()
        // reCAPTCHA - can't solve it from cypress .
    });
});

