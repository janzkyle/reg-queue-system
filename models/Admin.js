const Sequelize = require("sequelize");
const db = require("../config/db");

const Admin = db.define(
  "Admin",
  {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    db,
    modelName: "Admin"
  }
);

module.exports = Admin;
