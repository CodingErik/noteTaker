const express = require('express');
const app = express();

// morgan gives me basic info about my request
const morgan = require('morgan'); 
const _ = require('lodash'); 


// require routers 
// ****************************************
const htmlRouter = require('./Develop/Routers/htmlRouter'); 
const apiRouter = require('./Develop/Routers/apiRouter'); 
// ****************************************



const PORT = process.env.PORT || 8080;

// MIDDLEWARE
// ****************************************
app.use(express.urlencoded({ extended: true })); // this is for fancy json 
app.use(express.json());

// to import website style
app.use(express.static('Develop/public'));  // maybe assets 

// setting up a small middleWare for testing
app.use(morgan('dev'));
// ****************************************


// ROUTERS*********************************
// here we set up the routers
// mount 
app.use('/', htmlRouter);
// mount 
app.use('/api', apiRouter); 
//*****************************************




//set up listening on server
app.listen(PORT, () => {
    console.log(`server on port ${PORT} is started.`);
})