const {Sequelize} = require('sequelize');
const { log } = require('winston');
const config = require('../config/config.js')[process.env.NODE_ENV || "development"];

const sequelize = new Sequelize(
     config.database,config.username,config.password,{
          host: config.host,
          dialect: "postgres",
          port : config.port,
          logging: config.logging,

     }
);
module.exports = sequelize;

