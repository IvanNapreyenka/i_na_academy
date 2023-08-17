const { expect } = require('chai');
const { Given, When, Then } = require('@wdio/cucumber-framework');


Given(/^I navigate on (.*) page$/, async function (url) {
    await browser.url(url)
});

When(/^I click (.*) element$/, async (selector) => {
    await $(selector).waitForClickable();
    await $(selector).click();
});

When(/^I fill filed (.*) with text (.*)$/, async (selector, searchText) => {
    await $(selector).waitForDisplayed();
    await $(selector).setValue(searchText);
});

Then (/^I expect (.*) url should be (.*)$/, async (element, text) => {
    await expect(await $(element).getUrl()).to.equal(text);
    });

Then (/^I expect (.*) title contains text (.*)$/, async (element, text) => {
    await expect(await (await $(element).getTitle()).toLowerCase()).to.equal(text.toLowerCase())
    });

Then (/^I expect (.*) element contains text (.*)$/, async (element, text) => {
    await $(element).waitForDisplayed();
    await expect(await (await $(element).getText()).toLowerCase()).to.equal(text.toLowerCase());
    });
