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
    fs.readFile(path.resolve(__dirname, "../db/db.json"), 'utf8', (err, data) => {
        if (err) console.log(err.message); 
        res.json(data);
    })
})

// Should receive a new note to save on the request body
// add it to the `db.json` file, and then return the new note to the client.


apiRouter.post(`/notes`, (req, res, next) => {
    let userNote = req.body; 
    // this is the note that people can read and such 
    // console.log(userNote);
    fs.writeFile('message.txt', data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });

    
    res.sendStatus(200); 
})


apiRouter.delete(`/notes/:id`, (req, res, next) => {

})



module.exports = apiRouter; 