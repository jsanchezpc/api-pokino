require("./config");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// use CORS
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.json());

//import app
app.use(require("./routes/app"));

app.listen(process.env.PORT, () =>
  console.log(`Port ${process.env.PORT} listening for calls`)
);
