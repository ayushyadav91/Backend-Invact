module.exports = (sequelize, DataTypes) => {
  const ItineraryItem = sequelize.define('itineraryItem', {
    itineraryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'itineraries', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    itemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING, // 'Flight', 'Hotel', 'Site'
      allowNull: false,
    },
  }, {
    timestamps: true,
  });
  return ItineraryItem;
};
