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
       type: DataTypes.FLOAT, 
       allowNull: false,
       validate: {
         min: 0, 
       },
     },
   }, {
     timestamps: true, 
   });
   
   module.exports = {Company};