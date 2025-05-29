const express = require("express");

const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello Hello Hello!");
});

app.get("/test", (req, res) => {
  res.send("Hello from the server!");
});

app.get("/", (req, res) => {
  res.send("Namaste Mriganka!");
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
