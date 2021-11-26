const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database:'band_reviews',
});

app.get("/", (req,res) => {
    const sqlInsert = "INSERT INTO band_reviews (bandName, bandReview) VALUES ('Metallica', 'Good Band');";
    db.query(sqlInsert, (err, result) => {
    res.send("hello Goku");
    });

});


app.listen(3001, () => {
    console.log('running on port 3001');
});