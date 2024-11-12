module.exports = (sequelize, DataTypes) => {
     const TourItem = sequelize.define('TourItem', {
       tourId: {
         type: DataTypes.INTEGER,
         allowNull: false,
         references: {
           model: 'Tours',
           key: 'id'
         }
       },
       itemId: {
         type: DataTypes.INTEGER,
         allowNull: false
       },
       type: {
         type: DataTypes.STRING,
         allowNull: false
       }
     }, {});
   
     TourItem.associate = (models) => {
       TourItem.belongsTo(models.Tour, { foreignKey: 'tourId', as: 'tour' });
     };
   
     return TourItem;
   };
   