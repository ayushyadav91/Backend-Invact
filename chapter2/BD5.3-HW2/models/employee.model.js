// import { DataTypes } from "../lib/connectDB";
const {DataTypes, Sequelize} = require("../lib/connectDB");

const Employee = Sequelize.define("Employee", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  designation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  department: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  salary: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { Employee };
