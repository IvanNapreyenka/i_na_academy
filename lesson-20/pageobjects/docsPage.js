const BasePage = require ('./basePage')

class DocsPage extends BasePage {
    get url() {
        return $('//*[contains(@property,"og:url")]');
    }
}

module.exports = new DocsPage();