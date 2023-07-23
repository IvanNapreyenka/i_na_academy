const { Builder, By } = require("selenium-webdriver");
const { expect } = require('chai');

(async function () {
    let driver = new Builder().forBrowser('chrome').build();
    await driver.get('https://chromedriver.chromium.org/home');
    const titleChromeDriverText = await driver.findElement(By.xpath('//*[@id="h.p_ID_13"]/span'));
    expect(await titleChromeDriverText.getText()).to.equal('ChromeDriver');
    const headerChromeExtensionsButton = await driver.findElement(By.css('li:nth-child(3) div.PsKE7e.qV4dIc.Qrrb5.YSH9J div a'))
    await headerChromeExtensionsButton.click();
    const titleChromeExtensionsText = await driver.findElement(By.xpath('//*[@id="h.p_ID_13"]/span'));
    await driver.executeScript("arguments[0].style.backgroundColor = 'yellow';", titleChromeExtensionsText);
    expect(await titleChromeExtensionsText.getText()).to.equal('Chrome Extensions');
    await driver.quit();
})();