const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imageResize = async (req, res, next) => {
     try{
    const originalFilePath = req.files[0].path;
    const parsePath = path.parse(originalFilePath);
    const outputFilepath = path.join(path.join(parsedPath.dir,"resized-", parsedPath.name + ".jpeg"));
    await sharp(originalFilePath).resize({width:1500}).jpeg({ 
     quality:100,
     mozjpeg:true,
     chromaSubampling:'4:4:4',
     trellisQuantisation:true,
     overshootDeringing:true,
     optimiseScans:true,
    
     progressive:true,
    }).toFile(outputFilepath);
    req.files[0].path = outputFilepath;
    next();
     } catch(error){
        return res.status(500).json({error:{description:error.field}});
     }
}


module.exports = {imageResize};
