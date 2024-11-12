
module.exports = (sequelize, DataTypes) => {
     const site = sequelize.define("site",{
          name:DataTypes.STRING,
          location:DataTypes.STRING,
          description:DataTypes.STRING,
     },{timestamps:true}
);
return site;

};
