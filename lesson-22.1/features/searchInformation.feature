Feature: Tests to check possibility to search information via header

Scenario: The first search result contins the search word
Given I navigate on https://webdriver.io/ page
And I click .DocSearch-Button-Placeholder element
And I fill filed .DocSearch-Input with text Installation
Then I expect a[href="/docs/wdio-slack-service/#installation"] .DocSearch-Hit-title mark element contains text Installation