const express = require("express");
const app = express();
PORT = 3001;
app.get("/", (req, res) => {
  res.send("This is  home page");
});

app.get("/html", (req, res) => {
  res.send(`<h1>This is HTML tag h1</h1>`);
});

app.listen(PORT, (req, res) => {
  console.log(`Listening the server on the port ${PORT}`);
});
