import path from 'path';
import multer from "multer";
import { fileTypeValidator } from "../utils/fileTypeValidator.js";
import { UNEXPECTED_FILE_TYPE } from "../constants/file.js";

const storage = multer.diskStorage({

     //here is requestion then file then cb= callback function
      destination:(res,file,cb)=>{
         cb(null, "uploads");
      },
      filename:(req,file,cd)=>{
    cb(null, Date.now() + path.extname(file.originalname));
      },
});

const upload = multer({
     storage:storage,
     fileFiler:(req ,file,cb)=>{
          const isFailetypeAllowd = fileTypeValidator(file)
          if(isFailetypeAllowd){
               return cb(null,true);
          } else {
               cb(new multer.MulterError(
       UNEXPECTED_FILE_TYPE.code,
       UNEXPECTED_FILE_TYPE.message,
               ));
          }
     },
}).array('file',1);

export default upload;