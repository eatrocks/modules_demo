const hello = require("./hello.js");
const goodbye = require("./goodbye.js");
console.log("index in cjsmodule executed", hello("Me"));
module.exports = { hello, goodbye };
