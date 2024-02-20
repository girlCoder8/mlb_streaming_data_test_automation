const { Builder } = require('selenium-webdriver');
const config = require('../config/config');

const buildDriver = async () => {
    return new Builder().forBrowser(config.browser).build();
};

module.exports = {
    buildDriver,
};
