// this is for authontication the user whenever he try to login
// this is not a part of zod 
//this is a part of node js auth using session id

const { getUser } = require("../services/auth");
// const route = require("../routes/userroutes");

//middleware function
async function restrictTologgedinUseronly(req, res, next) {
    // console.log(req)
    const useruid = await req.cookies?.uid;  // store the uid in to the useruid 
    // const useruid = req.cookies && req.cookies.uid;
    if (!useruid) return res.redirect("/yourshed/login");
    const user = getUser(useruid); // if uid is happen the find the user detils and stores it in user 
    if (!user) return res.redirect("/yourshed/index");
    req.user = user;  //store the uid with user details in to the request object 
    next();
};
module.exports = { restrictTologgedinUseronly };