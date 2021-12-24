const express = require("express");

const app = express();

app.get("/jugar/:idSala", (req, res) => {
  console.log(`Jugando en la sala ${req.params["idSala"]}`);
  res.json({ msg: `Jugando en la sala ${req.params["idSala"]}` });
});

module.exports = app;
