const { expect } = require('chai');
const mainPage = require ('../pageobjects/mainPage');
const header = require('../pageobjects/components/header');

describe ('Tests to check possibility to search information via header', function () {
    it('The first search result contins the search word', async () => {
        await mainPage.navigate('https://webdriver.io/');
        await header.clickDeutschLanguage();
        expect(await header.languageInHeader.getText()).to.equal('Deutsch');
    })
});