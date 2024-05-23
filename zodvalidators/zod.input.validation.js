const { z } = require("zod");

//creating a object schema
const userSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be atleast of 3 charactor " })
    .max(255),
  email: z
    .string({ required_error: "Email is required" })
    .trim() 
    .email({ message: "Invaild email address " }),
  phone: z
    .string({ required_error: "phone number is required" })
    .trim()
    .min(10, { message: "Number must be atleast of 10 digits" })
    .max(13, { message: "Number must not be greater then 13 digits " }),
  password: z
    .string({ required_error: "password is required" })
    .min(3, { message: "password must be more than 3 character" }),
  // .password("Invails password")
  // .require(),
});

module.exports = {userSchema};
