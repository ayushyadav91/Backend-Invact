module.exports = (sequelize, DataTypes) => {
     const AfterParty = sequelize.define('AfterParty', {
       location: DataTypes.STRING,
       city: DataTypes.STRING,
       date: DataTypes.DATE,
       ticketPrice: DataTypes.FLOAT
     });
   
     AfterParty.associate = (models) => {
       AfterParty.belongsTo(models.Tour, { foreignKey: 'tourId' });
     };
   
     return AfterParty;
   };
   