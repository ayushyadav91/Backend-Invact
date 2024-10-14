// const { Sequelize, DataTypes } = require("sequelize");


// const sequelize = new Sequelize({
//      dialect:'sqlite',
//      storage:'./db/database.sqlite',
// })

// module.exports = {DataTypes : Sequelize.DataTypes,sequelize};
const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/database.sqlite'
});

module.exports = { DataTypes: Sequelize.DataTypes, sequelize };


