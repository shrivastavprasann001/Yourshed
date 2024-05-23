const express = require("express");
const app = express();
const route = require("./routes/userroutes");
const mongoose = require("mongoose");
const path = require("path");
const bodyparser = require("body-parser"); //middle Ware
const ejslayout = require("express-ejs-layouts");
const cookieParser = require("cookie-parser");

// app.use(express.json()); // middleware to receive data from postman request
// app.use(express.urlencoded({ extended: false })); // middleware uses to get form data from postman

app.use(bodyparser.urlencoded({ extends: false })); //middleware to parse the incoming requests form data with url encoded
app.use("/yourshed", route); // use router file
app.use(express.static(path.join(__dirname + "/public"))); //middleware to access ejs file
app.use(ejslayout);
app.use(cookieParser());
app.set("view engine", "ejs"); // set ejs for templating
app.set("layout", "/layout/main.ejs");

app.listen(5001, () => {
  console.log("Server has started at 5000 port ");
});
