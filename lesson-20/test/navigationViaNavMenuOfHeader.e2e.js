const { expect } = require('chai');
const mainPage = require ('../pageobjects/mainPage');
const docksPage = require ('../pageobjects/docsPage')
const header = require('../pageobjects/components/header');

describe ('Tests for navigation to pages via navigation menu of Header', function () {
    it('An user are able to navigate to Docs page via navigation menu on Page', async () => {
        await mainPage.navigate('https://webdriver.io/');
        await header.clickDocksNavButton();
        expect(await docksPage.url.getUrl()).includes('https://webdriver.io/docs/gettingstarted');
    })
});