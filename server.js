const express = require('express');
const app = express();

// morgan gives me basic info about my request
const morgan = require('morgan'); 
const _ = require('lodash'); 

// require peopleRouter // import peopleRouter
// const peopleRouter = require('./routers/peopleRouter'); 
// const animalRouter = require('./routers/animalRouter'); 


const PORT = process.env.PORT || 8080;

