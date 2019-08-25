const Sequelize = require("sequelize");
const db = require("../config/db");

const Queue = db.define(
  "Queue",
  {
    queueName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    location: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING
    },
    nowServingId: {
      type: Sequelize.INTEGER
    }
  },
  {
    db,
    modelName: "Queue"
  }
);

module.exports = Queue;
