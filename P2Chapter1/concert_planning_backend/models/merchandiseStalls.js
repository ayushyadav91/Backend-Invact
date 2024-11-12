module.exports = (sequelize, DataTypes) => {
     const MerchandiseStall = sequelize.define('MerchandiseStall', {
       stallName: DataTypes.STRING,
       itemAvailable: DataTypes.STRING,
       price: DataTypes.FLOAT
     });
   
     MerchandiseStall.associate = (models) => {
       MerchandiseStall.belongsTo(models.Tour, { foreignKey: 'tourId' });
     };
   
     return MerchandiseStall;
   };
   