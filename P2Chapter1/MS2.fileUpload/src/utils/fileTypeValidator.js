import path from 'path';
 
export const fileTypeValidator = (file)=>{
     const fileTypes = /jpeg|jpg|png|gif/
     const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
const mimeType = fileTypes.test(file.mimeType);
return extname && mimeType;
}