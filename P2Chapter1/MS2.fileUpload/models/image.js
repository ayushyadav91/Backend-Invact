

module.exports = (Sequelize,DataTypes)=>{
     Image.init({
          url:DataTypes.STRING,
          secure_url:DataTypes.STRING,
          TAGS:DataTypes.STRING,
          uploadedAt:DataTypes.DATE,
          userId:DataTypes.INTGER,
          isDeleted:DataTypes.BOOLEAN,
          createdAt:DataTypes.DATE,
          updatedAt:DataTypes.DATE,
     },{
          Sequelize,
          modelName:"Image"
     });
     return Image;
}