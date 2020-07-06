const express = require('express');
const app = express();

// morgan gives me basic info about my request
const morgan = require('morgan'); 
const _ = require('lodash'); 

// require peopleRouter // import peopleRouter
// const peopleRouter = require('./routers/peopleRouter'); 
// const animalRouter = require('./routers/animalRouter'); 


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
// app.use('/people', peopleRouter);
// mount 
// app.use('/animal', animalRouter); 
//*****************************************




//set up listening on server
app.listen(PORT, () => {
    console.log(`server on port ${PORT} is started.`);
})