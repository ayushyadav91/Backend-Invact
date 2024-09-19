// let {DataTypes, sequelize} = require("sequelize");

// const Sequelize = new sequelize({
//      dialect:"sqlite",
//      Storage:"./db/database.js",
// })

// module.exports = {DataTypes:DataTypes.sequelize,Sequelize};
// const Sequelize = require('sequelize'); 

// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: './db/database.sqlite'
// });

// module.exports = { DataTypes: Sequelize.DataTypes, sequelize };
const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/database.sqlite'
});

module.exports = { DataTypes: Sequelize.DataTypes, sequelize };