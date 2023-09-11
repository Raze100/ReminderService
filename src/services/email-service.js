const sender = require('../config/emailConfig');  
const TicketRepository  = require('../repository/ticket-repository')

const repo = new TicketRepository();

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


const fetchPendingEmails = async(timestamp) => {
     try {
        const response = await repo.getAll({status: 'PENDING'});
        return response;
     } 
     catch (error) {
        console.log(error);
     }
}

const createNotification = async(data) => {
    try {
       const response = await repo.create(data);
       return response;
    } 
    catch (error) {
        throw error;
    }
}

module.exports = {
    sendBasicEmail,
    fetchPendingEmails,
    createNotification
}