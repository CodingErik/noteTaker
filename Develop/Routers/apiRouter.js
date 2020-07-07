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

// path for where we are writting
let dataBase = path.resolve(__dirname, "../db");

// these paths are getting hit 

// get the notes and read it 
apiRouter.get(`/`, (req, res, next) => {
    // this is reading the db 
    fs.readFile(path.resolve(dataBase, "db.json"), 'utf8', (err, data) => {

        // response to send back 
        // this is the json data
        //turned back to array so we can use it
        res.json(JSON.parse(data));
    })
})

// Should receive a new note to save on the request body
// add it to the `db.json` file, and then return the new note to the client.
apiRouter.post(`/`, (req, res, next) => {

    // here we read the file so that then we can add to it!!
    let data = fs.readFileSync(path.resolve(dataBase, "db.json"), "utf8");
    let arr = JSON.parse(data);

    // saving all the user input  
    const userNote = {
        id: idNumber,
        title: req.body.title,
        text: req.body.text
    }

    //just testing to see what the body gives us 
    // console.log(req.body)

    arr.push(userNote);

    fs.writeFileSync(path.resolve(dataBase, "db.json"), JSON.stringify(arr))

    // this returns the json to the user to see 
    res.json(userNote);

    // add the next id
    idNumber += 1;
})



// delete the note by id 
apiRouter.delete('/:id', (req, res) => {
    // get the user request
    // we parse because it is a string 
    const deleteID = Number.parseInt(req.params.id);

    //testing
    // console.log(deleteID);

    // we read our file then parse becase it is a string 
    // so we turn it to an array again 
    let file = JSON.parse(fs.readFileSync(path.join(dataBase, 'db.json'), 'utf8'))
    
    //testing
    // console.log('thisis file ', file)

    // we filter the note that has the matching id 
    // and create a new array with everything else
    let newData = file.filter(e => !(e.id === deleteID));
    
    //testing    
    // console.log(newData)

    // then we write the file with the new data 
    fs.writeFileSync(path.join(dataBase, 'db.json'), JSON.stringify(newData))

    res.json({msg:"done"});
});




module.exports = apiRouter;

