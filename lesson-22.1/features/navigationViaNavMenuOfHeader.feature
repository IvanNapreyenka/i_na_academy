Feature: Tests for navigation to pages via navigation menu of Header

Scenario: An user are able to navigate to Docs page via navigation menu on Page
Given I navigate on https://webdriver.io/ page
When I click .navbar__items a[href="/docs/gettingstarted"] element
Then I expect //*[contains(@property,"og:url")] url should be https://webdriver.io/docs/gettingstarted