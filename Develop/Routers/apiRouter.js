// // Adding fs module to help access db.json file
// var fs = require("fs");
// // Adding path module to help navigate directories
// var path = require("path");
// // Creating variable to hold db.json path
// const dbDir = path.resolve(__dirname, "../db");


const fs = require('fs');
const path = require('path');
const express = require('express');

const apiRouter = express.Router();


apiRouter.get(`/notes`, (req, res, next) => {
    fs.readFile(path.join(__dirname, "../db/db.json"), 'utf8', (err, data) => {
        if (err) console.log(err.message); 
        res.json(data);
    })
})


apiRouter.post(`/notes`, (req, res, next) => {

})


apiRouter.delete(`/notes/:id`, (req, res, next) => {

})



module.exports = apiRouter; 