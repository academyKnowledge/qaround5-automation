/// <reference types="cypress"/>

// test comment 
/** there are two types of software testing 
 * 1. manual 
 * 2. automation 
 * 
 * You can write test cases in Automation tool ( cypress ) in 2 ways : 
 * 1. describe - it 
 * 2. cucumber 
 */

describe('describe 1', () => {
    // it('test case 1', () => {
    //     cy.visit("https://www.google.com/")
    // });

    // it('test case 2', () => {
    //    cy.visit("/auth/login") 
    // });

  it('validate that the user sing up to the system',()=>{
        cy.visit("https://demo.productionready.io/#/register")
        cy.get(".text-xs-center").first()  // get Singup above form Singup 
        cy.contains(" Have an account?")
        cy.get("[placeholder=Username]").type("Ibraheem Abu Hijleh")
        cy.get("[placeholder=Email]").type("abuhijlehibrahim2002@gmail.com")
        cy.get("[placeholder=Password]").type("Ibra1234")
        cy.get("[type=submit]").click()
     })

       it('validate that the user click on headre button',()=>{
       cy.visit("https://demo.productionready.io/#/register")
       cy.get("li a").first().click
       cy.get("li a").eq(2).click
       cy.get("div a").first().click
    })

      it('validate that the user click on Fotter',()=>{
       cy.visit("https://demo.productionready.io/#/register")
       cy.get(".logo-font").click
       cy.get(".attribution").click
    })
});
