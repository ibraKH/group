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

        if(result.length > 0){
            if(serachFor.division == result[0].division){
                res.render("result", {
                    message: "قروب الشعبة",
                    result
                })
            }else{
                res.render("result", {
                    message: "لا يوجد قروب لنفس الشعبة لكن يوجد قروب للمادة",
                    result
                })
            }
        }else{
            res.render("result", {
                message: "لايوجد قروب",
                result
            })
        }
    })
})

router.get("*", (req,res) => {
    res.status(404).send("Page not Found!!");
})

module.exports = router;