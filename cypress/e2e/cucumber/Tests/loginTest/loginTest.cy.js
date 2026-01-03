import { Given , When , Then, Before ,After } from "cypress-cucumber-preprocessor/steps";
import loginTestActions from "../../../../pageObjects/loginTest/Actions.cy";
import sharedActions from "../../../../pageObjects/shared/Actions.cy";
import sharedAssertions from "../../../../pageObjects/shared/Assertions.cy";
import loginTestAssertions from "../../../../pageObjects/loginTest/Assertions.cy";

beforeEach(()=>{
    cy.log("This is beforeEach hook")
})
const loginTest  = new loginTestActions()
const sharedAction = new sharedActions()
const sharedAssertion = new sharedAssertions()
const loginTestAssertion = new loginTestAssertions()

// Before({tags:"@TC-7689"},()=>{
//     cy.screenshot()
// })

// Before({tags:"@TC-7689 or @TC-4567"},()=>{
//     cy.screenshot()
// })

// Before({tags:"@area1 and @TC-4567"},()=>{
//     cy.screenshot()
// })

// Before({tags:"not @TC-4567"},()=>{
//     cy.screenshot()
// })

Given("The user navigate to the login page",()=>{
    loginTest.openLoginPage()
})

When("The user types {string} in email input field",(email)=>{
    loginTest.typeEmailInEmailInputField(email)
})

When("The user types {word} in password input field",(password)=>{
    loginTest.typePasswordInPasswordInputField(password)
})

When("The user clicks on login button",()=>{
    loginTest.clickOnSubmitButton()
    sharedAction.takeScreenshot()
    
})

When("The user types invalid email in email input field",()=>{
    loginTest.typeEmailInEmailInputField("shahdtest133@mail.com")
})

Then("The user will be redirected to the home page",()=>{
    sharedAssertion.checkCurrentURLIsEqual("https://automationexercise.com/")
    loginTestAssertion.checkLabelIsVisible().checkLogoutUrlIsExitAndIsVisible()
})

Then("The user should stay in login page",()=>{
    sharedAssertion.checkCurrentURLIsEqual("https://automationexercise.com/login")
})

Then("A validation message {string} should shown",(message)=>{
    loginTestAssertion.checkValidationMessageIsVisibleAndIsContain(message)
})