let sq = require('sequelize');

const sequelize = new sq.Sequelize({
  dialect: 'sqlite',
  storage: './db/database.sqlite'
});

module.exports = {DataTypes : sq.DataTypes, sequelize}