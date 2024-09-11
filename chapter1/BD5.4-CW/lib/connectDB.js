let sequelize = require("sequelize");

const Sequelize = new sequelize({
     dialect:"sqlite",
     Storage:"./db/database.js",
})

module.exports = {DataTypes:DataTypes.sequelize,Sequelize};