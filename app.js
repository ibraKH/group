const express = require("express");
const app = express();
const path = require("path");

const bodyParser = require("body-parser");

const PORT = process.env.PORT || 4002;


// to eable ejs access html
app.set("view engine", "ejs");

// access public files or photo in the folder public
let publicDierctory = path.join(__dirname, "./public");

app.use(express.static(publicDierctory));




app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use("/", require("./routes/pages"));



app.listen(PORT, err => err ? console.log(err) : console.log("listenning on PORT : ", PORT));

