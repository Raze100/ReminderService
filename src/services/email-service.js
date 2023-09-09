const sender = require('../config/emailConfig');  

const sendBasicEmail = async (mailFrom, MailTo, mailSubject, mailBody) => {
    const response = await sender.sendMail({
        from: mailFrom,
        to: MailTo,
        subject: mailSubject,
        text: mailBody
    });   

    console.log(response);
}

module.exports = {
    sendBasicEmail
}