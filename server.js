const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/db");

const AdminModel = require("./models/Admin");
const QueueModel = require("./models/Queue");
const StudentModel = require("./models/Student");

const admin = require("./routes/api/admin");

const app = express();

//Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//connect to db
db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

//link model relationships
AdminModel.hasMany(QueueModel);
QueueModel.belongsTo(AdminModel);
StudentModel.belongsTo(QueueModel);

//update db
//db.sync({ force: true });
db.sync();

app.get("/", (req, res) => res.send("Hello World!"));

//use routes
app.use("/api/admin", admin);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port: ${port}`));
