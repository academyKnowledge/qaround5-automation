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

    it('Select command', () => {
        cy.visit("http://127.0.0.1:5500/actionsLesson.html")
        cy.get("#country").select("Jordan")
        cy.get("#country").select("egypt_country")
        cy.get("#country").select(0)
    });

    it('check uncheck commands', () => {
        cy.visit("http://127.0.0.1:5500/actionsLesson.html")
        // cy.get("#Banana").check()
        // cy.get("[name=snack4]").check().uncheck()
        cy.get("[type=checkbox]").check(['Banana','Fries','le'])
        cy.get("[type=checkbox]").uncheck('Fries')
        cy.get("[type=checkbox]").uncheck(['Banana','le'])
        cy.get("#developer").check()
        // 
       // cy.get("#tester").check() 
        cy.reload()
        cy.get("#checkMe").check({force:true})
    });

    it('dbclick command', () => {
        cy.visit("http://127.0.0.1:5500/actionsLesson.html")
        cy.get("#dbClick").dblclick()
    });

    it('focus and blur commands', () => {
       cy.visit("http://127.0.0.1:5500/actionsLesson.html")
       cy.get("#myTextField").focus().blur()
    });

    it.only('trigger command', () => {
      cy.visit("http://127.0.0.1:5500/actionsLesson.html")
        cy.get("#trigger_btn").trigger("mouseover").trigger("mouseleave")
        cy.get("#btn1").trigger("mousedown")
    });
});
