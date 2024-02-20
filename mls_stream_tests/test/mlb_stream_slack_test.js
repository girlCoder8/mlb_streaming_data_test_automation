const { assert } = require('chai');
const { buildDriver } = require('../utils/webdriver');
const config = require('../config/config');
const { sendSlackNotification } = require('../utils/slack');

describe('MLB Streaming Data Test', function () {
    this.timeout(30000);

    let driver;

    before(async () => {
        driver = await buildDriver();
    });

    after(async () => {
        await driver.quit();
    });

    it('Should load MLB streaming page and verify video player', async () => {
        await driver.get(config.baseURL);

        const videoPlayer = await driver.findElement({ id: 'video-player' });
        assert.isTrue(await videoPlayer.isDisplayed(), 'Video player is not displayed.');

        // Notify on Slack for test result
        sendSlackNotification('MLB Streaming Data Test Passed!');
    });

    // Add more test scenarios that reflect your requirements
});
