const {expect} = require('chai');

describe ('Test to check functionality of header', function() {

    it('Possible to switch language', async () => {
        await browser.url('https://webdriver.io/');
        await $('.dropdown--hoverable.dropdown--right').click();
        await $('a[href="/de/"]').waitForExist();
        await $('a[href="/de/"]').scrollIntoView();
        await $('a[href="/de/"]').click();
        expect (await $('.dropdown--right a[href="#"]').getText()).to.equal('Deutsch');
      });
});