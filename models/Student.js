const Sequelize = require("sequelize");
const db = require("../config/db");

const Student = db.define(
  "Student",
  {
    queueNumber: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    idNumber: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    isGrad: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    year: {
      type: Sequelize.INTEGER
    },
    course: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    db,
    modelName: "Student"
  }
);

module.exports = Student;
