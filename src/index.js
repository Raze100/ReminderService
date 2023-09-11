const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const cron = require('node-cron')

const { sendBasicEmail } = require('./services/email-service');
const req = require('express/lib/request');

const setUpAndStartServer = () => {

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.listen(PORT,()=>{
    console.log(`Server Started on PORT: ${PORT}`);

    // sendBasicEmail(
    //     'support@admin.com',
    //     'rohitmails084@gmail.com',
    //     'This is a testing email',
    //     'Hey, how are you, I hope you like the support'
    // )
    // cron.schedule('*/2 * * * *',() => {
    //     console.log('running a task every two minutes');
    // })
})
}

setUpAndStartServer();
