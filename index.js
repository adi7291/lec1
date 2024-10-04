const express = require("express");
require("dotenv").config();
const app = express();
const port = 3001;
app.get("/", (req, res) => {
  res.send("This is  home page");
});

app.get("/html", (req, res) => {
  res.send(`<h1>This is HTML tag h1</h1>`);
});

app.listen(process.env.PORT, (req, res) => {
  console.log(`Listening the server on the port ${process.env.PORT}`);
});
