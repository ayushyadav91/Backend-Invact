module.exports = (sequelize, DataTypes) => {
     const Concert = sequelize.define('Concert', {
       artist: DataTypes.STRING,
       venue: DataTypes.STRING,
       city: DataTypes.STRING,
       date: DataTypes.DATE,
       ticketPrice: DataTypes.FLOAT,
       seatCategory: DataTypes.STRING
     });
   
     Concert.associate = (models) => {
       Concert.belongsTo(models.Tour, { foreignKey: 'tourId' });
     };
   
     return Concert;
   };
   