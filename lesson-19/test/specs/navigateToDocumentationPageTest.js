const {expect} = require('chai');

describe ('Test to check navigation from Main page', function() {

    it('Possibility to navigate to Documentation page via Main page', async function() {
    await browser.url('https://webdriver.io/');
    await $('.navbar__items a[href="/docs/gettingstarted"]').click();
    const currentUrl = await browser.getUrl();
    expect(await (currentUrl)).includes('https://webdriver.io/docs/gettingstarted');
});
});