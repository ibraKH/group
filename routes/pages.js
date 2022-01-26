const express = require("express");
const db = require("../database/connection");
const router = express.Router();

router.get("/", (req,res) => {
    res.render("main");
})

router.post("/search", (req,res) => {

    let connection = db();
    let serachFor = req.body;

    connection.query(`SELECT * FROM groups WHERE course = '${serachFor.course}'`, (err, result) => {
        if(err){
            console.log(err);
        }

        res.render("result", {result: "helllksadjffds.kjsdfha"});
    })
})

router.get("*", (req,res) => {
    res.status(404).send("Page not Found!!");
})

module.exports = router;