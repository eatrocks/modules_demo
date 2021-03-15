const hello = require("./hello.js");

test("says hello to Bruce", () => expect(hello("Bruce")).toBe("Hello Bruce"));
