/// <reference types="cypress"/>
describe('Selectors', () => {
    it('cypress commands', () => {
        cy.visit("/")
        cy.get("[name=username]").type("Admin")
        cy.get("[type=password]").type("admin123")
        cy.get(".orangehrm-login-button").click()
        // cy.visit("/pim/viewEmployeeList")
        // cy.contains("Add")  // get the first element contains word Add 
        // cy.contains("a","Add")
        // cy.contains("button","Add") 
        // cy.contains("Search")

        // cy.get(".orangehrm-quick-launch-card").first()
        // cy.get(".orangehrm-quick-launch-card").last()
        // cy.get(".orangehrm-quick-launch-card").eq(3)
        // cy.get(".orangehrm-quick-launch-card").first().next()
        // cy.get(".orangehrm-quick-launch-card").eq(3).prev()
        // cy.get(".orangehrm-quick-launch-card").last().prev()
        // cy.wait(1000)
        // cy.get("div").filter(".orangehrm-quick-launch-card")
        // cy.get("div").not(".orangehrm-quick-launch-card")

        cy.get(".orangehrm-quick-launch-card").first().find("button")

        cy.contains("a","OrangeHRM").parent()

    });
});