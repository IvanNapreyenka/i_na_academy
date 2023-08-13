class Header {
    get docksNavButton () {
        return $('.navbar__items a[href="/docs/gettingstarted"]');
    }

    async clickDocksNavButton() {
        await this.docksNavButton.waitForDisplayed();
        await this.docksNavButton.click();
    }

    get searchFieldElement () {
        return $('.DocSearch-Button-Placeholder');
    }

    async clickSearchFieldElement() {
        await this.searchFieldElement.waitForDisplayed();
        await this.searchFieldElement.click();
    }
    get switchLanguageButton () {
        return $('.dropdown--hoverable.dropdown--right');
    }
    async clickSwitchLanguageButton() {
        await this.switchLanguageButton.waitForDisplayed();
        await this.switchLanguageButton.click();
    }
    get deutschLanguageElement() {
        return $('a[href="/de/"]');
    }
    async clickDeutschLanguage() {
        await this.switchLanguageButton.waitForDisplayed();
        await this.switchLanguageButton.click();
        await this.deutschLanguageElement.click();
    }
    get languageInHeader() {
        return $('.dropdown--right a[href="#"]');
    }
}

module.exports = new Header();