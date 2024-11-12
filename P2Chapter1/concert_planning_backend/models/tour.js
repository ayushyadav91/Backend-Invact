module.exports = (sequelize, DataTypes) => {
     const Tour = sequelize.define('Tour', {
       name: {
         type: DataTypes.STRING,
         allowNull: false
       }
     });
   
     // Association setup
     Tour.associate = (models) => {
       Tour.hasMany(models.Concert, { foreignKey: 'tourId' });
       Tour.hasMany(models.MerchandiseStall, { foreignKey: 'tourId' });
       Tour.hasMany(models.AfterParty, { foreignKey: 'tourId' });
     };
   
     return Tour;
   };
   