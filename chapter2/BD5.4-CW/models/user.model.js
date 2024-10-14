let { DataTypes, sequelize } = require("../lib/connectDB");

let user = sequelize.define("user", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,

  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
   
  },
  password: {  
    type: DataTypes.STRING,
    allowNull: false,

  },
});

module.exports = { user };
