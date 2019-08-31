const Sequelize = require("sequelize");
const db = require("../config/db");
const bcrypt = require("bcrypt");

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

Admin.beforeCreate(async admin => {
  try {
    const hash = await bcrypt.hash(admin.password, 10);
    admin.password = hash;
  } catch (err) {
    throw new Error();
  }
});

module.exports = Admin;
