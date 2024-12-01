const sequelize = require('sequelize');

const Sequelize = new sequelize({
     dialect: 'sqlite',
     storage: './lib/db.sqlite',
   });
   
   module.exports = { DataTypes: sequelize.DataTypes, Sequelize };