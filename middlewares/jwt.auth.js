// this is for authontication the user whenever he try to login
// this is not a part of zod 
//this is a part of node js auth using session id
const express = require("express");
const app = express();
const cookie = require("cookie-parser")
const { getuser } = require("../services/auth");
// const route = require("../routes/userroutes");
app.use(cookie());
//middleware function
async function restrictTologgedinUseronly(req, res, next) {
    // console.log(req)
    const token =  req.cookies?.token;  // store the uid in to the useruid 
    // const useruid = req.cookies && req.cookies.uid;
    console.log(token)
    if (!token) return res.redirect("/yourshed/login");
    getuser(token); // if uid is happen the find the user detils and stores it in user 
    next();
};
module.exports = { restrictTologgedinUseronly };