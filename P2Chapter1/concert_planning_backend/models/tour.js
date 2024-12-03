// models/tour.js
module.exports = (sequelize, DataTypes) => {
  const tour = sequelize.define('tour', {
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
  });

  // Association setup
tour.associate = (models) => {
  tour.hasMany(models.tourItem, { foreignKey: 'tourId'});
 
  };

  return tour;
};
