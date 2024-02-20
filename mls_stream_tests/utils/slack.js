const { IncomingWebhook } = require('slack-webhook');
const config = require('../config/config');

const slackWebhookUrl = 'YOUR_SLACK_WEBHOOK_URL'; // Replace with your Slack webhook URL

const sendSlackNotification = (message) => {
    const webhook = new IncomingWebhook(slackWebhookUrl);
    webhook.send({
        text: message,
    });
};

module.exports = {
    sendSlackNotification,
};
