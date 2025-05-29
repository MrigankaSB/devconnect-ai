const express = require("express");

const app = express();

// app.use("/hello", (req, res) => {
//   res.send("Hello Hello Hello!");
// });

// app.use("/test", (req, res) => {
//   res.send("Hello from the server!");
// });

// app.use("/", (req, res) => {
//   res.send("Namaste Mriganka!");
// });

app.get("/user", (req, res) => {
  res.send({ firstName: "Mriganka Shekhar", lastName: "Barman" });
});

app.post("/user", (req, res) => {
  // Write the logic to create a new user and save it to the Database
  res.send("Data successfully saved to the database!");
});

app.delete("/user", (req, res) => {
  res.send("Deleted successfully!");
});

app.put("/user", (req, res) => {
  res.send("Updated the entire Data!");
});

app.patch("/user", (req, res) => {
  res.send("Updated the particular part of the Data!");
});

app.use("/test", (req, res) => {
  res.send("Hello from the server!");
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
