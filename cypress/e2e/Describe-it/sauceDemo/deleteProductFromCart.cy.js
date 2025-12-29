describe('', () => {
    let productName = "Black heels"
    let message = "It appears that your cart is currently empty!"
    let message2 = "Your cart is empty."

    before(()=>{
        cy.log("this is before hook")
    })

    beforeEach(()=>{
        cy.visit('https://sauce-demo.myshopify.com/collections/all')
        cy.contains(productName).click();
        cy.get('#product-select-option-0').select('M');
        cy.get('#add').click(); 
    })
    it('Validate the user can delete a product from checkout page', () => {
        cy.wait(2500)
        cy.get(".checkout").click();
        cy.get(".remove a").last().click()
        cy.get("#cart .info").should("not.exist")
        cy.get("#cart p").should("contain",message)
    });

    it('Validate the user can delete a product from shopping cart', () => {
        cy.wait(2500)
        cy.get(".checkout").click();
        cy.get(".toggle-drawer").click()
        cy.get(".removeLine").click()
        cy.get("#drawer .info").should("not.exist")
        cy.get(".empty").should("contain",message2)
    });

    after(()=>{
        cy.log("This is after hook")
    })

    afterEach(()=>{
        // code to delete the added product 
        cy.log("This is after Each hook")
    })

   
});