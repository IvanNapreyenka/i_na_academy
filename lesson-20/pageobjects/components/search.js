class Search {
    get docSearchField() {
        return $('.DocSearch-Input');
    }

    async enterSearchInformation (searchDocs) {
        await this.docSearchField.waitForDisplayed();
        await this.docSearchField.setValue(searchDocs);
    }

    get firstServicesResult () {
        return $('a[href="/docs/wdio-slack-service/#installation"] .DocSearch-Hit-title mark');
    }
}

module.exports = new Search();