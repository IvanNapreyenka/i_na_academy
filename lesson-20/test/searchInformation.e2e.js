const { expect } = require('chai');
const mainPage = require ('../pageobjects/mainPage');
const header = require('../pageobjects/components/header');
const search = require('../pageobjects/components/search');

describe ('Tests to check possibility to search information via header', function () {
    it('The first search result contins the search word', async () => {
        await mainPage.navigate('https://webdriver.io/');
        await header.clickSearchFieldElement();
        await search.enterSearchInformation('installation');
        expect(await search.firstServicesResult.getText()).to.equal('Installation');
    })
});