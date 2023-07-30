const {expect} = require('chai');

describe ('Test to check text of page', function() {

    it ('Possible to see correct title of Main page', async () => {
        await browser.url('https://webdriver.io/');
        const title = await browser.getTitle();
        expect (title).to.equal('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO');
    });
});