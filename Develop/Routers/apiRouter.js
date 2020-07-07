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

let idNumber = 1;

const dbDir = path.resolve(__dirname, "../db");

// get the notes and read it 
apiRouter.get(`/`, (req, res, next) => {
    // this is reading the db 
    fs.readFile(path.resolve(dbDir, "db.json"), 'utf8', (err, data) => {

        // response to send back 
        // this is the json data
        //turned back to array so we can use it
        res.json(JSON.parse(data)); 
    })
})

// Should receive a new note to save on the request body
// add it to the `db.json` file, and then return the new note to the client.


apiRouter.post(`/`, (req, res, next) => {
    // path for where we are writting
    let dataBase = path.resolve(__dirname, "../db");
    

    // here we read the file so that then we can add to it!!
    let data = fs.readFileSync(path.resolve(dataBase, "db.json"), "utf8");
    let arr = JSON.parse(data);

    // saving all the user input  
    const userNote = {
        id: idNumber,
        title: req.body.title,
        text: req.body.text
    }

    arr.push(userNote);

    fs.writeFileSync(path.resolve(dataBase, "db.json"),JSON.stringify(arr))


    // this returns the json to the user to see 
    res.json(userNote);

    // add the next id
    idNumber += 1; 
})



// delete the note by id 
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