/// <reference types="cypress"/>

describe('Actions', () => {
    it('click command', () => {
        cy.visit("http://127.0.0.1:5500/actionsLesson.html")
        cy.get("#btn1").click()
        cy.get("#btn2").click("left")
        cy.get("#btn0").click({force:true})
        cy.get(".btn").click("bottom",{multiple:true})
    });

    it('type command', () => {
        cy.visit("http://127.0.0.1:5500/actionsLesson.html")
        cy.get("[placeholder='Type your name']").type("Razan",{delay:1000})
        cy.get("[name=input_0]").type("testing",{force:true})
    });

    it('', () => {
        cy.visit("https://www.google.com/")
        cy.get("[name=q]").type("test{enter}")
    });

    it.only('Select command', () => {
        cy.visit("http://127.0.0.1:5500/actionsLesson.html")
        cy.get("#country").select("Jordan")
        cy.get("#country").select("egypt_country")
        cy.get("#country").select(0)
    });
});
