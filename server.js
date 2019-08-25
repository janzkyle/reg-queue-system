const express = require("express");
const db = require("./config/db");

const Admin = require("./models/Admin");
const Queue = require("./models/Queue");
const Student = require("./models/Student");

const app = express();

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

Admin.hasMany(Queue);
Queue.belongsTo(Admin);
Student.belongsTo(Queue);

db.sync();

app.get("/", (req, res) => res.send("Hello World!"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port: ${port}`));
