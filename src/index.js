const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const  ticketController  = require('./controllers/ticket-controller')


// const { sendBasicEmail } = require('./services/email-service');

const jobs = require('./utils/jobs');

const setUpAndStartServer = () => {

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/api/v1/tickets',ticketController.create);

app.listen(PORT,()=>{
    console.log(`Server Started on PORT: ${PORT}`);
    jobs();

    // sendBasicEmail(
    //     'support@admin.com',
    //     'rohitmails084@gmail.com',
    //     'This is a testing email',
    //     'Hey, how are you, I hope you like the support'
    // )
    
})
}

setUpAndStartServer();
