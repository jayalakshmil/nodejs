const fs = require ('fs');

// require express
const express = require ('express');

//create object and add port
const app = express ();
const port = 6500;

// Define  default route with express

app.get('/',(req,res) => {
    res.send ('<h1> Welcome to Express Server </h1>')
});

app.get ('/getmovies',(req,res) => {
    fs.readFile ('./data/db.json',(err,result) => {
        if (err){
            throw err;
        }else {
            res.send(JSON.parse(result));
        }
    })
})

app.listen (port,(err) => {
    console.log ('server is Running on port'+port);
})