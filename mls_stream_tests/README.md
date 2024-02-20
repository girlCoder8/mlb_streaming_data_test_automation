# Example: Stream MLB Media Test Automation Framework

### Requirements
- <b>JavaScript</b> - ![JavaScript](https://img.shields.io/badge/-javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- <b>Selenium 4.17</b> - ![Selenium](https://img.shields.io/badge/-selenium-%43B02A?style=for-the-badge&logo=selenium&logoColor=white)
- <b>Mocha 10.3</b> - ![Mocha](https://img.shields.io/badge/-mocha-%238D6748?style=for-the-badge&logo=mocha&logoColor=white)
- <b>Node.js</b> - [![NodeJs](https://img.shields.io/badge/-NodeJS%20v12%20OR%20later-%23339933?logo=npm)](https://nodejs.org/en/download/)
- <b>Jenkins</b> - ![Jenkins](https://img.shields.io/badge/jenkins-%232C5263.svg?style=for-the-badge&logo=jenkins&logoColor=white)
- <b>Docker 2.0+</b> - [![Docker](https://img.shields.io/badge/-Docker-0db7ed?logo=docker&logoColor=white)](https://docs.docker.com/engine/install/)
- <b>JMeter</b> - ![JMeter](https://img.shields.io/badge/Apache%20JMeter-D22128.svg?style=for-the-badge&logo=Apache-JMeter&logoColor=white)

### Installation
- <b>[Selenium](https://www.selenium.dev/documentation/webdriver/)
- [Mocha](https://mochajs.org)
- [Node.js](https://nodejs.org/en)
- [Jenkins](https://www.jenkins.io/download/)
- [Docker](https://docs.docker.com/get-docker/)
- [JMeter](https://jmeter.apache.org/download_jmeter.cgi)
- [Slack](https://api.slack.com/messaging/webhooks)
- [Microsoft Teams](https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook?tabs=dotnet)
</b>

### Pre-requisites
- [x] Node.js installed for JavaScript execution.<br>
- [x] Selenium WebDriver for JavaScript installed (npm install selenium-webdriver).<br>
- [x] JMeter installed for load testing.<br>
- [x] Slack webhook installed to receive notifications, test results and updates directly in your collaboration channel.<br>
- [x] Microsoft Teams webhook installed to receive notifications, test results and updates directly in your collaboration channel.<br>

### How to Install Slacks' Webhook
`npm install slack-webhook`

### How to Install Microsoft Teams' Webhook
`npm install msteams-webhook`

### How to Run the Docker Container
Navigate to the directory containing the Dockerfile run:
`docker build -t mlb_stream_test .`

Run the Docker Container:
`docker run -it --rm mlb_stream_test`

### Optional: How to Run Docker Compose
`docker-compose up`

### Slack or Microsoft Teams Integration
Depending on which communication channel that your team uses, you would either select and use `slack.js` or `teams.js`. I've included documentation on how to set up and use Slack or Microsoft Teams in the README.md file.
<b> Note: Ensure that you have the correct permissions and configurations in Slack and Microsoft Teams to receive incoming webhooks. Replace the placeholder URLs with the actual webhook URLs obtained from your Slack and Microsoft Teams channels.

### Clone this repo
`https://github.com/girlCoder8/mlb_streaming_data_test_automation.git`