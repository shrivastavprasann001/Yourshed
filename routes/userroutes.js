// Define Routers file
const express = require("express");
const route = express.Router();
const userControllerRoute = require("../controllers/userControllers");

// const User = require("../models/db.schema");
// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
const { restrictTologgedinUseronly } = require("../middlewares/jwt.auth")
// const { signupschema } = require("../zodvalidators/zod.input.validation");
// const { validate } = require("../middlewares/validate_middleware");

//Routes
route.get("/index", restrictTologgedinUseronly, userControllerRoute.index);
route.get("/login", userControllerRoute.loginget);
route.get("/register", userControllerRoute.registerget);
route.get("/properties", userControllerRoute.properties);
route.get("/services", userControllerRoute.services);
route.get("/about", userControllerRoute.about);
route.get("/contact", userControllerRoute.contact);
route.get("/property-single", userControllerRoute.property_singal);
route.post("/login", userControllerRoute.loginpost);
route.post("/register", userControllerRoute.registerpost);

module.exports = route;
