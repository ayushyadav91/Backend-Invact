const {Sequezlie} = require("sequelize");

const sequelize = new Sequezlie({
     dialect:'sqlite',
     Storage:'./db/database.sqlite',
})
module.exports = {DataTypes : Sequelize.DataTypes,sequelize};
