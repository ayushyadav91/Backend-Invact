module.exports = (sequelize, DataTypes) => {
  const ItineraryItem = sequelize.define(
    "itineraryItem",
    {
      itineraryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "itinerary",
          key: "id",
        },
      },
      itemId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );

  // Define associations here
  ItineraryItem.associate = (models) => {
    ItineraryItem.belongsTo(models.itinerary, { foreignKey: "itineraryId" });
  };

  return ItineraryItem;
};
