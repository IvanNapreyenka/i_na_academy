const { expect } = require('chai');
const mainPage = require ('../pageobjects/mainPage');
const header = require('../pageobjects/components/header');

describe ('Tests to check possibility to switch site Language', function () {
    it('Possibility to switch language to Deutsch', async () => {
        await mainPage.navigate('https://webdriver.io/');
        await header.clickDeutschLanguage();
        expect(await header.languageInHeader.getText()).to.equal('Deutsch');
    })
});
