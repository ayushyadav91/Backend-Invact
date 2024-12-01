// models/tour.js
module.exports = (sequelize, DataTypes) => {
  const Tour = sequelize.define('Tour', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: 'tours' // Ensure table name is explicitly set to match migration
  });

  // Association setup
  Tour.associate = (models) => {
    Tour.hasMany(models.Concert, { foreignKey: 'tourId' });
    Tour.hasMany(models.MerchandiseStall, { foreignKey: 'tourId' });
    Tour.hasMany(models.AfterParty, { foreignKey: 'tourId' });
  };

  return Tour;
};
