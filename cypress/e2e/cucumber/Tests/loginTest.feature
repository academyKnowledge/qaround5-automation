@TC-5678 @smokeTest @teamName @area1
Feature: login functionality

    Background:
        Given The user navigate to the login page

    Scenario: Validate that the user can login successfully to the website
        When The user types email in email input field
        And The user types password in password input field
        And The user clicks on login button
        Then The user will be redirected to the home page

    Scenario: Validate that the user can login successfully to the website
        When The user types invalid email in email input field
        And The user types password in password input field
        And The user clicks on login button
        Then The user should stay in login page
        And A validation message "Your email or password is incorrect!" should shown