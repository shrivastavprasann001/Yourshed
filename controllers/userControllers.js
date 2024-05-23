const express = require("express");
const { User, Admin, Property } = require("../models/db.schema");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid")
const { setUser } = require("../services/auth");
const { setuser } = require("../services/jwt.auth");

exports.loginget = (req, res) => {
  res.render("login");
};
exports.loginpost = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  console.log(req.body);
  //first compare email we can't compare password becaouse it is encrypted
  const singleUser = await User.findOne({ email });
  if (singleUser) {
    // then we have to compare password
    bcrypt.compare(password, singleUser.password, (error, record) => {
      console.log(`error:${error}`);
      console.log(`record:${record}`);
      if (record) {
        console.log("password matched");
        console.log("congratulations You have logged in ");
        // res.redirect("index");

        //Create Session id 
        // const sessionId = uuidv4();
        // console.log(sessionId);
        // setUser(sessionId, singleUser); // this function store the session id and founded user in Map
        // res.cookie("uid", sessionId).redirect("index");

        //jwt token authentication
        const token = setuser(singleUser) // receive a token 
        return res.cookie("token", token).redirect("index");

      } else {
        console.log("You have entered wrong password");
        res.redirect("login");
      }
    });
    console.log("user found");
  } else {
    console.log("User not exist");
    res.redirect("register");
  }
};
exports.index = (req, res) => {
  res.render("index");
};
exports.registerget = (req, res) => {
  res.render("register");
};
exports.registerpost = async (req, res) => {
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;
  console.log(req.body);
  //encrypted the password
  const EncryptPass = bcrypt.hashSync(req.body.password, 10);
  console.log(EncryptPass);
  console.log(req.body);
  // res.send(req.body); // use to show data in postman
  //CHECK EMAIL VALIDATION
  const singleUser = await User.findOne({ email, password, username });
  if (singleUser) {
    console.log("Email already exist");
  } else {
    // store data in mongoDB  as a new collection
    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      username: username,
      email: email,
      password: EncryptPass,
    });
    user
      .save()
      .then((result) => {
        console.log("record successfully saved");
      })
      .catch((err) => console.log(err));
    res.render("index");
  }
};

exports.properties = (req, res) => {
  res.status(200);
  res.render("properties");
};
exports.services = (req, res) => {
  res.status(200);
  res.render("services");
};
exports.about = (req, res) => {
  res.status(200, "ok");
  res.render("about");
};
exports.contact = (req, res) => {
  res.status(200, "ok");
  res.render("contact");
};
exports.property_singal = (req, res) => {
  res.status(200, "ok");
  res.render("property-single");
};
