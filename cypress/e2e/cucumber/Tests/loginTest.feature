@TC-5678 @smokeTest @teamName @area1
Feature: login functionality

    Background:
        Given The user navigate to the login page

    @TC-4567 @area1
    Scenario: Validate that the user can login successfully to the website
        When The user types "Roaa@Gha.com" in email input field
        And The user types 123456789 in password input field
        And The user clicks on login button
        Then The user will be redirected to the home page

    @TC-7689 @smokeTestCase @area1
    Scenario: Validate that the user can't login successfully to the website
        When The user types invalid email in email input field
        And The user types password in password input field
        And The user clicks on login button
        Then The user should stay in login page
        And A validation message "Your email or password is incorrect!" should shown

    @TC-7685 @outline @area1
    Scenario Outline: Validate that the user can login successfully to the website
        When The user types <email> in email input field
        And The user types <password> in password input field
        And The user clicks on login button
        Then The user will be redirected to the home page


        Examples:
            | email                 | password     |
            | "shahdtest1@mail.com" | Password123! |
# | "Roaa@Gha.com"        | 123456789    |
# | "shahdtest2@mail.com" | Password123! |
