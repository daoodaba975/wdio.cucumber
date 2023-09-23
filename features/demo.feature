Feature: Test Login Functionality

  Scenario Outline: check login with valid credentials
    Given user is on login page
    When user enters <username> and <password>
    And clicks on login button
    Then this <message> is displayed

    Examples: 
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | user123  | pass123              | Your username is invalid!      |
