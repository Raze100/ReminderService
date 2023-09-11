const cron = require('node-cron');
const emailService = require('../services/email-service')

/**
 * cron will run every 5 mins
 * We will check are there any pending emails which are expected to be send by now and is pending
 * to setup cron statement your according you can refer to website -> "CronTab.guru"
 */

const setupJobs = () => {
    cron.schedule('*/2 * * * *',async() => {
        const response = await emailService.fetchPendingEmails();
        console.log(response);
    })
}

module.exports = setupJobs;