const { sequelize, DataTypes } = require('../lib/index');


const Company = sequelize.define('Company', {
     name: {
       type: DataTypes.STRING,
       allowNull: false,
     },
     industry: {
       type: DataTypes.STRING,
       allowNull: false,
     },
     foundedYear: {
       type: DataTypes.INTEGER,
       allowNull: false,
      
     },
     headquarters: {
       type: DataTypes.STRING,
       allowNull: false,
     },
     revenue: {
       type: DataTypes.FLOAT, // use FLOAT for large numbers like revenue
       allowNull: false,
       validate: {
         min: 0, // revenue can't be negative
       },
     },
   }, {
     timestamps: true, // to include createdAt and updatedAt fields
   });
   
   module.exports = {Company};