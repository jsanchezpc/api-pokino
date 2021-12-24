const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.post("/entrar", (req, res) => {
  console.log("Nuevo jugador entrando");
  console.log(req.body);
  let body = req.body;

  let player = {
    username: body.username,
    sala: body.sala
  };

  let token = jwt.sign(
    {
      user: player
    },
    process.env.SEED,
    { expiresIn: process.env.CAD_TOKEN }
  );

  res.json({
    ok: true,
    user: player,
    token: token
  });
});

module.exports = app;
