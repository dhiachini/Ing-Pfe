const Demande = require("../models/demandes.models");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary");

// Function to extract userID from JWT token
const extractUserID = (req) => {
  const token = req.header("x-auth-token");
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded.user.id;
};

// Create demande
const createDemande = async (req, res) => {
  try {
    const userID = extractUserID(req);
    const {
      title,
      description,
      category,
      subcategory,
      transactionType,
      country,
      price,
      latitude,
      longitude,
    } = req.body;
    const imagesFromSource = req.files ?? req.body.images;

    const uploadPromises = imagesFromSource.map((img) =>
      cloudinary.uploader.upload(img.path)
    );
    const result = await Promise.all(uploadPromises);
    const imageUrls = result.map((res) => res.secure_url);
    // Create demande object
    const demande = new Demande({
      title,
      description,
      category,
      subcategory,
      transactionType,
      country,
      price,
      latitude,
      longitude,
      images: imageUrls,
      userID: userID,
    });

    // Save demande
    await demande.save();
    res.status(201).json({ message: "Demande created successfully", demande });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Delete demande
const deleteDemande = async (req, res) => {
  try {
    const userID = extractUserID(req);
    const demande = await Demande.findOneAndDelete({ _id: req.params.id, userID });
    if (!demande) {
      return res
        .status(404)
        .json({ message: "Demande not found or unauthorized" });
    }
    res.status(200).json({ message: "Demande deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Update demande
const updateDemande = async (req, res) => {
  try {
    const userID = extractUserID(req);
    const {
      title,
      description,
      category,
      subcategory,
      transactionType,
      country,
      price,
      latitude,
      longitude,
    } = req.body;

    const updatedFields = {
      title,
      description,
      category,
      subcategory,
      transactionType,
      country,
      price,
      latitude,
      longitude,
      images: req.files ? req.files.map((file) => file.path) : [],
    };

    const updatedDemande = await Demande.findOneAndUpdate(
      { _id: req.params.id, userID },
      { $set: updatedFields },
      { new: true }
    );

    if (!updatedDemande) {
      return res
        .status(404)
        .json({ message: "Demande not found or unauthorized" });
    }

    res
      .status(200)
      .json({ message: "Demande updated successfully", updatedDemande });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Find all demandes
const FindAllDemandes = async (req, res) => {
  try {
    const userID = extractUserID(req);
    const demandes = await Demande.find({ userID });
    res.status(200).json(demandes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Find single demande
const FindSingleDemande = async (req, res) => {
  try {
    const userID = extractUserID(req);
    const demande = await Demande.findOne({ _id: req.params.id, userID });
    if (!demande) {
      return res
        .status(404)
        .json({ message: "Demande not found or unauthorized" });
    }
    res.status(200).json(demande);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  createDemande,
  deleteDemande,
  updateDemande,
  FindAllDemandes,
  FindSingleDemande,
};
