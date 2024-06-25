// controllers/texteJuridiqueController.js
const TexteJuridique = require("../models/textejuridique.models");
const cloudinary = require("../cloudinaryConfig");
const multer = require("multer");
const path = require("path");

// Set up multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const fileTypes = /pdf/;
    const extname = fileTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = fileTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb("Error: PDFs Only!");
    }
  },
}).single("file");

const createTexteJuridique = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).send(err);
    }

    try {
      const result = await cloudinary.uploader.upload(req.file.path, {
        resource_type: "raw", // raw is used for non-image files
        folder: "texteJuridique",
      });

      const newTexteJuridique = new TexteJuridique({
        title: req.body.title,
        pays: req.body.pays,
        description: req.body.description,
        fileUrl: result.secure_url,
        fileId: result.public_id,
      });

      await newTexteJuridique.save();
      res.status(201).json(newTexteJuridique);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Something went wrong while uploading the file" });
    }
  });
};

const getTexteJuridiques = async (req, res) => {
  try {
    const textesJuridiques = await TexteJuridique.find();
    res.status(200).json(textesJuridiques);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

const deleteTexteJuridique = async (req, res) => {
    try {
      const texteJuridique = await TexteJuridique.findById(req.params.id);
      if (!texteJuridique) {
        return res.status(404).json({ error: "TexteJuridique not found" });
      }
  
      await cloudinary.uploader.destroy(texteJuridique.fileId, {
        resource_type: "raw",
      });
      await TexteJuridique.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "TexteJuridique deleted successfully" });
    } catch (error) {
      console.error("Error while deleting texte juridique:", error);
      res.status(500).json({ error: "Something went wrong" });
    }
  };

  const downloadTexteJuridique = async (req, res) => {
    try {
      const texteJuridique = await TexteJuridique.findById(req.params.id);
      if (!texteJuridique) {
        return res.status(404).json({ error: "TexteJuridique not found" });
      }
  
      // Construct the download URL using the fileUrl from cloudinary
      const fileUrl = texteJuridique.fileUrl;
  
      // If fileUrl is a cloudinary URL, you can directly redirect to it
      // Example: res.redirect(fileUrl);
  
      // For demonstration, assuming fileUrl is a direct link to the PDF
      res.status(200).json({ fileUrl });
    } catch (error) {
      console.error("Error while downloading texte juridique:", error);
      res.status(500).json({ error: "Something went wrong" });
    }
  };
  
  module.exports = {
    createTexteJuridique,
    getTexteJuridiques,
    deleteTexteJuridique,
    downloadTexteJuridique,
  };