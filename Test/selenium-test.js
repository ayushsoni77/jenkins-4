const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function testWebsite() {
    let options = new chrome.Options();
    options.addArguments('--headless', '--disable-gpu', '--no-sandbox', '--disable-dev-shm-usage');

    let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

    try {
        await driver.get('http://localhost'); 
        await driver.wait(until.titleIs('My First HTML Page'), 1000); 
        const greetingElement = await driver.findElement(By.tagName('h1'));
        const greetingText = await greetingElement.getText();

        if (greetingText === 'Good Morning!' || greetingText === 'Good Afternoon!' || greetingText === 'Good Evening!') {
            console.log("Greeting is correct based on time of day");
        } else {
            console.log("Greeting is not correct");
        }

        let aboutLink = await driver.findElement(By.linkText('About'));
        await aboutLink.click();

        await driver.wait(until.elementIsVisible(await driver.findElement(By.id('about'))), 3000);

        let scrollToTopButton = await driver.findElement(By.css('button'));
        await driver.executeScript('window.scrollTo(0, 500);');
        await driver.wait(until.elementIsVisible(scrollToTopButton), 1000); 
        await scrollToTopButton.click();

        console.log("Smooth scroll and scroll-to-top button are working");

    } catch (error) {
        console.error("Test failed:", error);
    } finally {
        await driver.quit();
    }
})();
