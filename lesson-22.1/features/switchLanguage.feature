Feature: Tests to check possibility to switch site Language

Scenario: Possibility to switch language to Deutsch
Given I navigate on https://webdriver.io/ page
When I click .dropdown--hoverable.dropdown--right element
And I click a[href="/de/"] element
Then I expect .dropdown--right a[href="#"] element contains text Deutsch