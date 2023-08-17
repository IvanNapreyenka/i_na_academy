Feature: Tests to check elements of Main Page

Scenario: Verify title of Main Page
Given I navigate on https://webdriver.io/ page
Then I expect //title title contains text WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO
