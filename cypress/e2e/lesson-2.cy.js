/// <reference types="cypress"/>
describe('Check login Functionality', () => {
    it('Validate that the user can login to the system', () => {
        cy.visit("/")  
        cy.get("[name=username]").type("Admin")
        cy.get("[type=password]").type("admin123")
        cy.get(".orangehrm-login-button").click()
        cy.get("[title='Assign Leave']").first().click()
        cy.get(".oxd-autocomplete-text-input input").type("Razan")
        cy.get(".oxd-topbar-body-nav-tab-item").first().click()
        cy.get(".orangehrm-copyright a")
        cy.get("[title=Help]")
        cy.get(".oxd-main-menu li:nth-child(4) a").click()
    });
});