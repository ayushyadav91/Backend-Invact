module.exports = (sequelize, DataTypes) => {
     const tourItem = sequelize.define('tourItem', {
       tourId: {
         type: DataTypes.INTEGER,
         allowNull: false,
         references: {
           model: 'tour',
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
     });
     tourItem.associate = (models) => {
       tourItem.belongsTo(models.tour, { foreignKey: 'tourId' });
     };
   
     return tourItem;
   };
   