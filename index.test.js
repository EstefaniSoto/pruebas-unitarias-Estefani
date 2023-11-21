const add = require("./conn.js");

test("Comprobacion de la suma", () => {
  expect(add()).toBe(30);
});