
const { DataTypes, sequelize  } = require('sequelize');



const user = sequelize.define('user', {
  username: DataTypes.STRING,
  email: DataTypes.STRING,
});

module.exports = user;
