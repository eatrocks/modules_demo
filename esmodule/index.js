//export { default as hello } from "./hello.js";
import hello from "./hello.js";
console.log("index in esmodule executed", hello("Bruce"));
export default hello;
