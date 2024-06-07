const Formservice = require("../models/formservice.models");
const jwt = require("jsonwebtoken");

// Function to extract userID from JWT token
const extractUserID = (req) => {
  const token = req.header("x-auth-token");
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded.user.id;
};

// Create formservice
const createFormservice = async (req, res) => {
  try {
    const userID = extractUserID(req);
    const { title, servicetype, prestationadress, description } = req.body;

    // Create formservice object
    const formservice = new Formservice({
      title,
      servicetype,
      prestationadress,
      description,
      userID,
    });

    // Save formservice
    await formservice.save();
    res.status(201).json({ message: "Formservice created successfully", formservice });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Delete formservice
const deleteFormservice = async (req, res) => {
  try {
    const userID = extractUserID(req);
    const formservice = await Formservice.findOneAndDelete({ _id: req.params.id, userID });
    if (!formservice) {
      return res.status(404).json({ message: "Formservice not found or unauthorized" });
    }
    res.status(200).json({ message: "Formservice deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Update formservice
const updateFormservice = async (req, res) => {
  try {
    const userID = extractUserID(req);
    const { title, servicetype, prestationadress, description } = req.body;

    const updatedFields = {
      title,
      servicetype,
      prestationadress,
      description,
    };

    const updatedFormservice = await Formservice.findOneAndUpdate(
      { _id: req.params.id, userID },
      { $set: updatedFields },
      { new: true }
    );

    if (!updatedFormservice) {
      return res.status(404).json({ message: "Formservice not found or unauthorized" });
    }

    res.status(200).json({ message: "Formservice updated successfully", updatedFormservice });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Find all formservices
const findAllFormservices = async (req, res) => {
  try {
    const userID = extractUserID(req);
    const formservices = await Formservice.find({ userID });
    res.status(200).json(formservices);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Find single formservice
const findSingleFormservice = async (req, res) => {
  try {
    const userID = extractUserID(req);
    const formservice = await Formservice.findOne({ _id: req.params.id, userID });
    if (!formservice) {
      return res.status(404).json({ message: "Formservice not found or unauthorized" });
    }
    res.status(200).json(formservice);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  createFormservice,
  deleteFormservice,
  updateFormservice,
  findAllFormservices,
  findSingleFormservice,
};
