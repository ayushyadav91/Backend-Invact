import express from "express";
import fs from "fs";
import path from 'path'; 
import { fileURLToPath } from "url";  // Correct import from "url"
import { fileRouter } from "./src/router/fileRouter.js";

const app = express();

// Convert import.meta.url to file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define upload directory and create if it doesn't exist
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Serve static files from the uploads directory
app.use("/uploads", express.static("uploads"));

// Use file router
app.use("/files", fileRouter);

// Default route
app.use("/", (req, res) => {
  res.send("Welcome to file/image upload");
});

// Start the server
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
