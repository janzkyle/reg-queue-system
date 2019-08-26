const express = require("express");
const db = require("./config/db");

const AdminModel = require("./models/Admin");
const QueueModel = require("./models/Queue");
const StudentModel = require("./models/Student");

const app = express();

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

AdminModel.hasMany(QueueModel);
QueueModel.belongsTo(AdminModel);
StudentModel.belongsTo(QueueModel);

db.sync();

app.get("/", (req, res) => res.send("Hello World!"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port: ${port}`));
