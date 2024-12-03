module.exports = (sequelize, DataTypes) => {
     const afterParties = sequelize.define('afterParties', {
       location: DataTypes.STRING,
       city: DataTypes.STRING,
       date: DataTypes.DATE,
       ticketPrice: DataTypes.FLOAT
     });
   
    //  afterParties.associate = (models) => {
    //    afterParties.belongsTo(models.tour, { foreignKey: 'tourId' });
    //  };
   
     return afterParties;
   };
   