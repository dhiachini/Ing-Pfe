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

module.exports = upload;
