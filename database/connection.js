module.exports = function(){


    const mysql = require('mysql2')
    const dotenv = require("dotenv").config();

    // Mysql connection
    const db = mysql.createConnection({
    host     : process.env.HOST,
    user     : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE,
    insecureAuth : true
    });

    db.connect((err) => {
        if(err){
            console.log("connection error : " + err);
        }
        console.log("connected...");
    });

    return db;
}