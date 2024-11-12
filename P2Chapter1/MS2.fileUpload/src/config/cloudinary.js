import {v2 as cloudinary}  from "cloudinary";
import crypto  from "crypto";
require('dotenv').config();


export const cloudinaryConfig = ()=>{
     cloudinary.config({
          clound:process.env.CLOUDINARY_CLOUD_NAME,
          api_key:process.env.CLOUDINARY_API_KEY,
          api_secret:process.env.CLOUDINARY_API_SECRET,
     });
};
export const generateSignature = ()=>{
     const {api_secret} = cloudinary.config();
     const sortedParams = Object.keys(paramsToSign).sort().map((key)=>`${key}=${paramstoSign[key]}`).join("&");

    
     const signature = crypto
     .createHash('shal')
     .update(sortedParams + api_secret)
     .digest("hex");

     return signature; 
};

export const uploadToCloudinary = async (filePath)=>{
     try{
          cloudinaryConfig();
          const timestamp = Math.round((new Date()).getTime()/1000);
          const paramsToSign = {
               timestamp,
          };
          const signature = generateSignature(paramsToSign)
          const result = await cloudinary.uploader.upload(filePath,{
               ...paramsToSign,
               signature,
               api_key:process.env.CLOUDINARY_API_KEY
               
          });
          return result;
     } catch(error){
      console.error(error);
     
     }
}