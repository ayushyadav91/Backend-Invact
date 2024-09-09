let { DataTypes, sequelize } = require("../lib/connectDB");

const Post =  sequelize.define("Post",{
  
 title:{
     type:DataTypes.STRING,
     allowNull:false,
      },
 content:{
type:DataTypes.TEXT,
allowNull:false
 }, author:{
type:DataTypes.STRING,
allowNull:false,
 }
},{timestamps:true});

module.exports = {Post};