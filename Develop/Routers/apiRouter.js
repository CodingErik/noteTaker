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

let id = 0;

apiRouter.get(`/`, (req, res, next) => {
    // this is reading the application 
    fs.readFile(path.resolve(__dirname, "../db/db.json"), 'utf8', (err, data) => {
        if (err) console.log(err.message);
        res.json(data);
    })
})

// Should receive a new note to save on the request body
// add it to the `db.json` file, and then return the new note to the client.


apiRouter.post(`/`, (req, res, next) => {

    // this is the note that people can read and such 
    const userNote = {
        id: id,
        title: req.body.title,
        text: req.body.text
    }
    // write to the file we might need to append 
        member.push(newMember);

    

    // fs.writeFile('message.txt', data, (err) => {
    //     if (err) throw err;
    console.log(userNote);
    //   });

    // sending a new note to the user 
    let newNote = { id: id += 1, title: "Test Title", text: "Test text" }

    res.sendStatus(200);
})

apiRouter.delete('/:id', (req, res) => {
    // confirm id exists
    const found = member.some(e => e.id === parseInt(req.params.id));

    if (found) {
        // loop through and take out that id 
        // if the id doesn't match the one in req.params.id keep it 
        let result = member.filter(e => e.id !== parseInt(req.params.id));
        //show the new result array 
        res.json({ msg: 'member deleted', result });
    } else {
        res.status(400).json({ msg: `sorry member with id:${req.params.id} does not exist` });
    }
});



module.exports = apiRouter; 