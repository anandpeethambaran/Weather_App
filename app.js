const express = require('express');
const app = express();

const weatherrouter = require('./routes/weatherroutes');





app.use('/', weatherrouter);








app.listen('3000', (error) => {
    if (!error) {
        console.log('Server running on port 3000');
    } else {
        console.log('Server connection failed');
    }
})











