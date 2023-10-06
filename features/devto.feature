Feature: Access Home Page

  Scenario Outline: Check If It Work
  
    Given lancer la page "https://dev.to"
    Then check that the DevTo home page is displayed
