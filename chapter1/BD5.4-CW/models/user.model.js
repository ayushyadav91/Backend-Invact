let { DataTypes, sequelize } = require("../lib/connectDB");

let user = sequelize.define("user", {
  username: {
    type: DataTypes.STRING,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,  // Corrected spelling
    validate: {
      isEmail: true,
    },
   
  },
  password: {  // Corrected typo
    type: DataTypes.STRING,

  },
});

module.exports = { user };
