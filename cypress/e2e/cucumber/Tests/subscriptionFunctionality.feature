Feature: Subscription Functionality

    Scenario Outline: Validate that the user can subscribe the website successfully
        Given The user navigates to contact us page
        When The user types <email> in email input field
        And The user clicks on arrow button
        Then A message "You have been successfully subscribed!" should shown

        Examples:
            | email                 |
            | shahdtest133@mail.com |
# | test@123.com          |