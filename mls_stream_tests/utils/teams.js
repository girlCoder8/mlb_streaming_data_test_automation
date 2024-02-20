const { TeamsWebhookClient } = require('msteams-webhook');
const config = require('../config/config');

const teamsWebhookUrl = 'YOUR_TEAMS_WEBHOOK_URL'; // Replace with your Microsoft Teams webhook URL

const sendTeamsNotification = (message) => {
    const client = new TeamsWebhookClient(teamsWebhookUrl);
    client.sendCard({
        title: 'MLB Streaming Data Test',
        text: message,
    });
};

module.exports = {
    sendTeamsNotification,
};
