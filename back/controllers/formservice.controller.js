const Formservice = require("../models/formservice.models");
const jwt = require("jsonwebtoken");
const AccountRequest = require("../models/accountrequest.model");

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
    res
      .status(201)
      .json({ message: "Formservice created successfully", formservice });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Delete formservice
const deleteFormservice = async (req, res) => {
  try {
    const userID = extractUserID(req);
    const formservice = await Formservice.findOneAndDelete({
      _id: req.params.id,
      userID,
    });
    if (!formservice) {
      return res
        .status(404)
        .json({ message: "Formservice not found or unauthorized" });
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
      return res
        .status(404)
        .json({ message: "Formservice not found or unauthorized" });
    }

    res
      .status(200)
      .json({
        message: "Formservice updated successfully",
        updatedFormservice,
      });
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
    const formservice = await Formservice.findOne({
      _id: req.params.id,
      userID,
    });
    if (!formservice) {
      return res
        .status(404)
        .json({ message: "Formservice not found or unauthorized" });
    }
    res.status(200).json(formservice);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Find single formservice without auth
const findSingleFormserviceWtauth = async (req, res) => {
  try {
    
    const formservice = await Formservice.findOne({
      _id: req.params.id,
    });
    if (!formservice) {
      return res
        .status(404)
        .json({ message: "Formservice not found or unauthorized" });
    }
    res.status(200).json(formservice);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Find all Formserices for all users
const findAllFormsericesForAllUsers = async (req, res) => {
  try {
    const formservice = await Formservice.find({});
    res.status(200).json(formservice);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};


// Get user details from formservice ID
const getUserDetailsFromFormservice = async (req, res) => {
  try {
    const formserviceID = req.params.id;

    // Fetch the formservice by ID
    const formservice = await Formservice.findById(formserviceID);
    if (!formservice) {
      return res.status(404).json({ message: "Formservice not found" });
    }

    const userID = formservice.userID;

    // Fetch the account request details for the userID
    const user = await AccountRequest.findById(userID);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const userDetails = {
      Fullname: user.Fullname,
      Professionalemail: user.Professionalemail,
      Telephonecode: user.Telephonecode,
      Phonenumber: user.Phonenumber,
      Companyname: user.Companyname,
    };

    res.status(200).json(userDetails);
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
  findSingleFormserviceWtauth,
  findAllFormsericesForAllUsers,
  getUserDetailsFromFormservice,
};
