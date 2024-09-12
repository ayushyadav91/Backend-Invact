const sequezlier = require("sequelize");

const sequelize = new sequezlier({
     dialect:'sqlite',
     Storage:'./db/database.sqlite',
})
module.exports = {DataTypes:DataTypes.sequezlier,sequelize};
