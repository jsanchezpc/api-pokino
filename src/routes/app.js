const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("Visita");
  res.json({
    msg: "test"
  });
});

app.use(require("./entrar"));
app.use(require("./jugar"));
module.exports = app;
