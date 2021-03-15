import hello from "./hello.js";

test("says hello to Bruce", () => expect(hello("Bruce")).toBe("Hello Bruce"));
