import multer from 'multer';
import { Router } from 'express'; 
import upload from '../middleware/fileUpload.js';
import { UNEXPECTED_FILE_TYPE } from '../constants/file.js';
import { fileController } from "../controllers/fileControllers.js"; // Correcting the typo in the fileController import

export const fileRouter = Router();

fileRouter.post('/upload', function(req, res, next) {
  upload(req, res, function(err) {
    if (err instanceof multer.MulterError) {
      if (err.code === UNEXPECTED_FILE_TYPE) {
        return res.status(400).json({ error: { description: err.field } });
      } else {
        return res.status(500).json({ error: { description: err.message } }); // Correcting the typo 'josn' to 'json'
      }
    } else if (err) {
      return res.status(500).json({ error: { description: 'Unknown error' } });
    }
    next();
  });
}, fileController);
