const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

// Define storage for the uploaded files
const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});



// Initialize multer
const upload = multer({ storage: storage });

// Route to handle file upload
router.post('/upload', upload.single('patent'), (req, res) => {
  // File has been uploaded successfully
  res.status(200).json({ message: 'File uploaded successfully' });
});



// Initialize multer
const uploadMultiple = multer({ 
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 } // Set file size limit to 10MB
});

// Route to handle file upload
router.post('/uploadMultiple', uploadMultiple.array('images', 5), (req, res) => {
  // Files have been uploaded successfully
  res.status(200).json({ message: 'Files uploaded successfully' });
});




module.exports = {upload , uploadMultiple};
