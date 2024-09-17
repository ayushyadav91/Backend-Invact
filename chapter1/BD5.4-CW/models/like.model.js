let {DataTypes , sequelize} = require("../lib/connectDB");
let {user} = require("./user.model");

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
})

user.belongsToMany(track,{throught:like});
track.belongsToMany(user,{throught:like});