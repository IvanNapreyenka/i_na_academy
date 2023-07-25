const { Builder, By } = require("selenium-webdriver");
const {expect} = require('chai');

(async function() {
    let driver = new Builder().forBrowser('chrome').build();
    await driver.get('https://chromedriver.chromium.org/home');
    const headerAdditionalButton = await driver.findElement(By.css('li.VsJjtf.oXBWEc div.PsKE7e.qV4dIc.Qrrb5.YSH9J div a'));
    await headerAdditionalButton.click();
    const mobileEmulation = await driver.findElement(By.xpath('//*[contains(@class,"PsKE7e IKA38e oNsfjf")]//*[@class="I35ICb"]/a[text()="Mobile Emulation"]'));
    await mobileEmulation.click();
    const currentUrl = await driver.getCurrentUrl();
    expect (await currentUrl).to.contain('/mobile-emulation');
    await driver.quit();
 })();