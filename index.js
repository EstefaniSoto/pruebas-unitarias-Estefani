const express = require("express");
const PORT = 5000;
const app = express();

const add = require("./conn");

app.get("/", (req, res) => {
  const result = add();
  res.send(`Resultado de la suma a evaluar: ${result}`);
});

app.listen(PORT, () => {
  console.log("Server running");
});