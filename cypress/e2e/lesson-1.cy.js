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
    it('test case 1', () => {
        cy.visit("https://www.google.com/")
    });

    it('test case 2', () => {
       cy.visit("/auth/login") 
    });
});
