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


apiRouter.get(`api/notes`, (req, res, next) =>{

})


apiRouter.post(`/api/notes`, (req, res, next) => {

})


apiRouter.delete(`/api/notes/:id`, (req, res, next) => {

})



module.exports = apiRouter; 