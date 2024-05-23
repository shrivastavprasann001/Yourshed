//Store the session id in user in database jissey database m bhi show hona chaoye session id jissey verify kr paye
// session id milne k baad 2nd step ji
const sessiontouser = new Map();

function setUser(id, user) {
    sessiontouser.set(id, user);
}
function getUser(id) {
    sessiontouser.get(id);
}
module.exports = { setUser, getUser };