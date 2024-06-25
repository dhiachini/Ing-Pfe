const ConseilJuridique = require("../models/conseiljuridique.model");
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

const createConseilJuridique = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).send(err);
    }

    try {
      const result = await cloudinary.uploader.upload(req.file.path, {
        resource_type: "raw", // raw is used for non-image files
        folder: "texteJuridique",
      });

      const newConseilJuridique = new ConseilJuridique({
        title: req.body.title,
        pays: req.body.pays,
        description: req.body.description,
        fileUrl: result.secure_url,
        fileId: result.public_id,
      });

      await newConseilJuridique.save();
      res.status(201).json(newConseilJuridique);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Something went wrong while uploading the file" });
    }
  });
};

const getConseilJuridiques = async (req, res) => {
  try {
    const conseilsJuridiques = await ConseilJuridique.find();
    res.status(200).json(conseilsJuridiques);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

const deleteConseilJuridique = async (req, res) => {
    try {
      const conseilJuridique = await ConseilJuridique.findById(req.params.id);
      if (!conseilJuridique) {
        return res.status(404).json({ error: "TexteJuridique not found" });
      }
  
      await cloudinary.uploader.destroy(conseilJuridique.fileId, {
        resource_type: "raw",
      });
      await ConseilJuridique.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "TexteJuridique deleted successfully" });
    } catch (error) {
      console.error("Error while deleting texte juridique:", error);
      res.status(500).json({ error: "Something went wrong" });
    }
  };

  const downloadConseilJuridique = async (req, res) => {
    try {
      const conseilJuridique = await ConseilJuridique.findById(req.params.id);
      if (!conseilJuridique) {
        return res.status(404).json({ error: "Conseil Juridique not found" });
      }
  
      // Construct the download URL using the fileUrl from cloudinary
      const fileUrl = conseilJuridique.fileUrl;
  
      // If fileUrl is a cloudinary URL, you can directly redirect to it
      // Example: res.redirect(fileUrl);
  
      // For demonstration, assuming fileUrl is a direct link to the PDF
      res.status(200).json({ fileUrl });
    } catch (error) {
      console.error("Error while downloading conseil juridique:", error);
      res.status(500).json({ error: "Something went wrong" });
    }
  };
  
  module.exports = {
    createConseilJuridique,
    getConseilJuridiques,
    deleteConseilJuridique,
    downloadConseilJuridique,
  };