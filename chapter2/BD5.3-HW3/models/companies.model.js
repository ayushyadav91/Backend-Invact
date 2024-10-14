const { DataTypes, sequelize } = require("../lib/connectDB");

const Companies = sequelize.define("Companies", {
  name: {
    type:DataTypes.STRING,
    allowNull: false,
  },
  industry: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  foundedYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  headquarters: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  revenue: {
    type: DataTypes.BIGINT,
    allowNull: false,
  }
}, { timestamps: true });

module.exports = { Companies };
