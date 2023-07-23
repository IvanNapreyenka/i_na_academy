const { Builder, By, until } = require("selenium-webdriver");
const {expect} = require('chai');

(async function() {
    let driver = new Builder().forBrowser('chrome').build();
    await driver.get('https://chromedriver.chromium.org/home');
    const openSearchFieldButton = await driver.findElement(By.xpath('//*[contains(@aria-label,"Открыть поле поиска")]'));
    await openSearchFieldButton.click();
    const searchField = await driver.findElement(By.xpath('//*[contains(@aria-label,"Поиск по сайту")]'));
    await searchField.sendKeys('driver');
    const searchButton = await driver.findElement(By.xpath('//*[@aria-label="Поиск"]'));
    await searchButton.click();
    const firstReference = await driver.wait(until.elementLocated(By.xpath('//*[contains(@class,"lZsZxe")]/div[1]/div/a')), 5000);
    const hrefValue = await firstReference.getAttribute('href')
    expect(await hrefValue).includes('driver');
    await driver.quit();
 })();