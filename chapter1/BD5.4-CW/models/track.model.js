let { DataTypes, Sequelize } = require("../lib/connectDB");


let track = Sequelize.define("track", {
  name: DataTypes.TEXT,
  genre: DataTypes.TEXT,
  release_year: DataTypes.INTEGER,
  artist: DataTypes.TEXT,
  album: DataTypes.TEXT,
  duration: DataTypes.INTEGER,
});


module.exports = {track};