let sequelize = require('sequelize');

const Sequelize = new sequelize({
  dialect: 'sqlite',
  storage: './db/database.sqlite'
});

module.exports = {DataTypes : sequelize.DataTypes, Sequelize};
