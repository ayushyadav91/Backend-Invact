module.exports = (sequelize, DataTypes) => {
     const merchandiseStall = sequelize.define('merchandiseStall', {
       stallName: DataTypes.STRING,
       itemAvailable: DataTypes.STRING,
       price: DataTypes.FLOAT
     });
   
    //  merchandiseStall.associate = (models) => {
    //    merchandiseStall.belongsTo(models.tour, { foreignKey: 'tourId' , as: 'tour' });
    //  };
   
     return merchandiseStall;
   };
   