const Demande = require("../models/demandes.models");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary");
const AccountRequest = require("../models/accountrequest.model");


// Function to extract userID from JWT token
const extractUserID = (req) => {
  const token = req.header("x-auth-token");
  if (!token) return null; // Return null if no token is provided
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded.user.id;
};

// Create demande
const createDemande = async (req, res) => {
  try {
    const userID = extractUserID(req);
    if (!userID) return res.status(401).json({ error: "Unauthorized" });

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
    if (!userID) return res.status(401).json({ error: "Unauthorized" });

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
    if (!userID) return res.status(401).json({ error: "Unauthorized" });

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

// Find all demandes for specific user
const FindAllDemandes = async (req, res) => {
  try {
    const userID = extractUserID(req);
    if (!userID) return res.status(401).json({ error: "Unauthorized" });

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
    if (!userID) return res.status(401).json({ error: "Unauthorized" });

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

// Find all demandes for all users
const findAllDemandesForAllUsers = async (req, res) => {
  try {
    console.log("findAllDemandesForAllUsers called"); // Add this line for debugging
    const demandes = await Demande.find({});
    res.status(200).json(demandes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Get user details from demande ID
const getUserDetailsFromDemande = async (req, res) => {
  try {
    const demandeID = req.params.id;
    
    // Fetch the offer by ID
    const demande = await Demande.findById(demandeID);
    if (!demande) {
      return res.status(404).json({ message: "demande not found" });
    }

    const userID = demande.userID;
    
    // Fetch the account request details for the userID with status "accepted"
    const user = await AccountRequest.findOne({ _id: userID});
    if (!user) {
      return res.status(404).json({ message: "User not found or not accepted" });
    }

    const userDetails = {
      Fullname: user.Fullname,
      Professionalemail: user.Professionalemail,
      Telephonecode: user.Telephonecode,
      Phonenumber: user.Phonenumber,
      Companyname: user.Companyname
    };

    res.status(200).json(userDetails);
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
  findAllDemandesForAllUsers,
  getUserDetailsFromDemande,
};
