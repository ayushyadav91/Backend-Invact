// let {DataTypes , sequelize} = require("../lib/connectDB");
const { DataTypes } = require("sequelize");
const { sequelize } = require("../lib/connectDB");

let {user} = require("./user.model");
let {track} = require("./track.model");

let like = sequelize.define("like",{
     userId:{
      type:DataTypes.STRING,
       reference:{
          model:track,
          key:"id"
       } 
     },
     trackId:{
          type:DataTypes.STRING,
          reference:{
             model:track,
             key:"id"
          }
     }
});

// user.belongsToMany(track,{throught:like});
// track.belongsToMany(user,{throught:like});

module.exports = { like };