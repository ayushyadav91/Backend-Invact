const { DataTypes, Sequelize } = require("../lib/index");

const Track = Sequelize.define("Track", {
  name: DataTypes.TEXT,
  genre: DataTypes.TEXT,
  release_year: DataTypes.INTEGER,
  artist: DataTypes.TEXT,
  album: DataTypes.TEXT,
  duration: DataTypes.INTEGER,
});

module.exports = { Track };
