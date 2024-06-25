const Offer = require("../models/offers.models");
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

// Create offer
const createOffer = async (req, res) => {
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

    // Create offer object
    const offer = new Offer({
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

    // Save offer
    await offer.save();
    res.status(201).json({ message: "Offer created successfully", offer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Delete offer
const deleteOffer = async (req, res) => {
  try {
    const userID = extractUserID(req);
    if (!userID) return res.status(401).json({ error: "Unauthorized" });

    const offer = await Offer.findOneAndDelete({ _id: req.params.id, userID });
    if (!offer) {
      return res
        .status(404)
        .json({ message: "Offer not found or unauthorized" });
    }
    res.status(200).json({ message: "Offer deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Update offer
const updateOffer = async (req, res) => {
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
      userID,
    };

    const updatedOffer = await Offer.findOneAndUpdate(
      { _id: req.params.id, userID },
      { $set: updatedFields },
      { new: true }
    );

    if (!updatedOffer) {
      return res
        .status(404)
        .json({ message: "Offer not found or unauthorized" });
    }

    res
      .status(200)
      .json({ message: "Offer updated successfully", updatedOffer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Find all offers for specific user
const FindAllOffers = async (req, res) => {
  try {
    const userID = extractUserID(req);
    if (!userID) return res.status(401).json({ error: "Unauthorized" });

    const offers = await Offer.find({ userID });
    res.status(200).json(offers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Find single offer
const FindSingleOffer = async (req, res) => {
  try {
    const userID = extractUserID(req);
    if (!userID) return res.status(401).json({ error: "Unauthorized" });

    const offer = await Offer.findOne({ _id: req.params.id, userID });
    if (!offer) {
      return res
        .status(404)
        .json({ message: "Offer not found or unauthorized" });
    }
    res.status(200).json(offer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Find all offers for all users
const findAllOffersForAllUsers = async (req, res) => {
  try {
    const offers = await Offer.find({});
    res.status(200).json(offers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Get user details from offer ID
const getUserDetailsFromOffer = async (req, res) => {
  try {
    const offerID = req.params.id;
    
    // Fetch the offer by ID
    const offer = await Offer.findById(offerID);
    if (!offer) {
      return res.status(404).json({ message: "Offer not found" });
    }

    const userID = offer.userID;
    
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
  createOffer,
  deleteOffer,
  updateOffer,
  FindAllOffers,
  FindSingleOffer,
  findAllOffersForAllUsers,
  getUserDetailsFromOffer,
};
