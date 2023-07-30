const {expect} = require('chai');

describe ('Test to check searching', function() {

    it('Possibility to search information', async function() {
        await browser.url('https://webdriver.io/');
        await $('.DocSearch-Button-Placeholder').click();
        const searchFieldInput = await $('.DocSearch-Input');
        await searchFieldInput.setValue('installation');
        expect(await $('a[href="/docs/wdio-slack-service/#installation"] .DocSearch-Hit-title mark').getText()).to.equal('Installation')
    });
});