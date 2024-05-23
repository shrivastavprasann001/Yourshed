const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/yourshed");
mongoose.connection.on("connected", () => {
  console.log("connected to database");
});
mongoose.connection.on("error", (err) => {
  console.log("connected to Error connecting to the database:" + err);
});

//create User Schema
const userSchema = new mongoose.Schema({
  //register page
  _id: mongoose.Schema.Types.ObjectId,
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  purchasedproperty: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Property'
  }]
});

//create Properety schema Schema
const propertySchema = new mongoose.Schema({
  //register page
  _id: mongoose.Schema.Types.ObjectId,
  propertytype: {   // flat,house,banglow,pg...
    type: String,
    require: true
  },
  location: {    // Gwalior, indore, pune ...
    type: String,
    require: true,
  },
  price: {    //50000,2000
    type: Number,
    require: true,
  }
});

//create Admin Schema
const adminSchema = new mongoose.Schema({
  //register page
  _id: mongoose.Schema.Types.ObjectId,
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
});

// create model of this schema
const User = new mongoose.model("Users", userSchema);
const Property = new mongoose.model("Property", propertySchema);
const Admin = new mongoose.model("Admin", adminSchema);
// export this schema
module.exports = { User, Property, Admin };
