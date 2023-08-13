const { expect } = require('chai');
const mainPage = require ('../pageobjects/mainPage');

describe ('Tests to check elements of Main Page', function () {
    it('Text "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO" is displayid as title of Main page', async () => {
        await mainPage.navigate('https://webdriver.io/');
        expect (await mainPage.getTitle()).to.equal('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO');
    })
});