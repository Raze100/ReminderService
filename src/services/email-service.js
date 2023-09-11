const sender = require('../config/emailConfig');  

const sendBasicEmail = async (mailFrom, MailTo, mailSubject, mailBody) => {
    try {
        const response = await sender.sendMail({
            from: mailFrom,
            to: MailTo,
            subject: mailSubject,
            text: mailBody
        });  
        console.log(response);
    } 
    catch (error) {
        console.log(error);
    } 
}

module.exports = {
    sendBasicEmail
}