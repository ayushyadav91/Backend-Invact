import { uploadToCloudinary } from "../config/cloudinary";
import fs from "fs";

export const cloudinaryUpload = async (file) =>{
     try{
          const cloudinaryResponse = await uploadToCloudinary(file.path);
          fs.unlink(file.path, (err)=>{
               if(err){
                    console.error(err);
               }
          });
          return cloudinaryResponse;
     } catch(error){
          console.error(error);
     }
}