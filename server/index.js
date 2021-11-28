const express = require('express');
const app = express();
const mysql = require('mysql');
// const bodyParser = require('body-parser');


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "band_reviews"
});

db.connect((err) => {
    if(err){
        console.log('Error connecting to Db');
    } else { 
        console.log('Connection Established');
    }   
});

app.get("/", (req,res) => {
    const sqlInsert = "INSERT INTO band_reviews (bandName, bandReview) VALUES ('Metallica','Really cool');";
    db.query(sqlInsert, (err, result) => {
        if (!err) {
            console.log('Successfully added information.');
            } else {
            console.log('Was not able to add information to database.');
        }
        res.send("Testing DB Connection");
    });
});

db.end(function (err){
    //
});

app.listen(3001, () => {
        console.log('running on port 3001');
    });


    