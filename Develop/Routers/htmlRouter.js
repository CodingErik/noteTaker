const path = require('path');
const express = require('express');

const htmlRouter = express.Router(); 


htmlRouter.get('/notes', (req, res, next) => {
    res.sendFile(path.join(__dirname, "../public/notes.html")); 
}); 


htmlRouter.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, "../public/index.html")); 
}); 


module.exports = htmlRouter; 