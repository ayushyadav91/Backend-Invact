const path = require("path");
 
 const fileTypeValidator = (file)=>{
     const fileTypes = /jpeg|jpg|png|gif/
     const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
const mimeType = fileTypes.test(file.mimeType);
return extname && mimeType;
}

module.exports = {fileTypeValidator};