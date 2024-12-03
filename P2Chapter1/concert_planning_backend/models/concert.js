module.exports = (sequelize, DataTypes) => {
     const concert = sequelize.define('concert', {
       artist: DataTypes.STRING,
       venue: DataTypes.STRING,
       city: DataTypes.STRING,
       date: DataTypes.DATE,
       ticketPrice: DataTypes.FLOAT,
       seatCategory: DataTypes.STRING
     });
   
    //  concert.associate = (models) => {
    //    concert.belongsTo(models.tour, { foreignKey: 'tourId', as: 'tour' });
    //  };
   
     return concert;
   };
   