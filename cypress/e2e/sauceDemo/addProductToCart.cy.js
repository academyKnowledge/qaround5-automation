/// <reference types="cypress"/>
describe('Products in cart', () => {

    let productName = "Black heels"
    let quantity = 1
    
    before(()=>{
        cy.loginToSauceDemo("eng.razanbalatiah96@gmail.com","test@123")
    })
    it('Validate that the user can add a product to cart', () => {
        cy.visit('https://sauce-demo.myshopify.com/collections/all')
        cy.contains(productName).click();
        cy.get('#product-select-option-0').select('M');
        cy.get('#add').click(); 
        cy.get('#cart-target-desktop .count').should('contain',quantity)
        cy.get(".checkout").click();
        cy.get("#cart .info").should("be.visible").and("contain",productName)
        cy.get("#cart .quantity input").should("be.visible").and("have.value",quantity)
    });

});