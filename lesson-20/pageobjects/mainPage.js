const BasePage = require ('./basePage')

class MainPage extends BasePage {
    get title() {
        return $('//title');
    }
    async getTitle() {
        return await browser.getTitle();
    }
}

module.exports = new MainPage();