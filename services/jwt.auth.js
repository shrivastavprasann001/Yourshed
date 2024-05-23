const jwt = require("jsonwebtoken")
const secret_key = "Prasann@123";

function setuser(user) {
    // create a jwt token 
    // const token =jwt.sign(payload,secret key)
    return jwt.sign({
        "email": "Shrivastava@gmail.com",
        "username": "Prasann@2001"
    }, secret_key)
}
function getuser(Token) {
    const decode = jwt.verify(Token, secret_key)
    console.log(decode)
}
module.exports = { setuser }