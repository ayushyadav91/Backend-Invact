const { DataTypes } = require('sequelize');
const { Sequelize } = require('../lib/index'); // Path apne project ke hisaab se adjust karo

const Like = Sequelize.define('Like', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users', // Exact table name
      key: 'id',
    },
  },
  trackId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Tracks', // Exact table name
      key: 'id',
    },
  },
});

module.exports = { Like };
