const AccountRequest = require("../models/accountrequest.model");
const ValidateAccountRequest = require("../validation/Accountrequest.validation");
const path = require("path");
const cloudinary = require("cloudinary");
const sendEmail = require('../emailService');
const bcrypt = require("bcryptjs");


const AddAccountRequest = async (req, res) => {
  try {
    const { errors, isValid } = ValidateAccountRequest(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const existingRequest = await AccountRequest.findOne({
      Professionalemail: req.body.Professionalemail,
    });
    if (existingRequest) {
      errors.Professionalemail = "Account request already exists";
      return res.status(400).json({ message: "Account request already exists" });
    } else {
     
      if (req.file) {
        Patent = req.file.path; // Get the file path
      }
      const result = await cloudinary.uploader.upload(Patent);
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.Password, salt);
      const accountRequest = new AccountRequest({
        Fullname: req.body.Fullname,
        Companyname: req.body.Companyname,
        Professionalemail: req.body.Professionalemail,
        Password: hashedPassword,
        Confirmpassword: hashedPassword,
        Telephonecode: req.body.Telephonecode,
        Phonenumber: req.body.Phonenumber,
        Websiteurl: req.body.Websiteurl,
        Adresse: req.body.Adresse,
        Country: req.body.Country,
        City: req.body.City,
        Taxregistrationnumber: req.body.Taxregistrationnumber,
        Status: "En attente",
        Patent: result.secure_url,
      });
      await accountRequest.save();
      res.status(201).json({
        message: "Account request added successfully",
        accountRequest: accountRequest,
      });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

const updateAccountRequestStatus = async (req, res) => {
  try {
    const { id } = req.params;
    // Find the account request by ID
    const accountRequest = await AccountRequest.findById(id);
    if (!accountRequest) {
      return res.status(404).json({ message: "Account request not found" });
    }
    // Update the status
    accountRequest.Status = "Acceptée";
    // Save the updated account request
    await accountRequest.save();
    // Send email notification
    sendEmail(accountRequest.Professionalemail, 'ALGETUN plate-forme Demande de compte acceptée', 'Votre demande de compte a été acceptée. Vous pouvez maintenant accéder à toutes les fonctionnalités de notre plate-forme ALGETUN.');
    res.status(200).json({ message: "Statut de la demande de compte mis à jour avec succès" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

const updateAccountRequestStatusToRefused = async (req, res) => {
  try {
    const { id } = req.params;
    // Find the account request by ID
    const accountRequest = await AccountRequest.findById(id);
    if (!accountRequest) {
      return res.status(404).json({ message: "Account request not found" });
    }
    // Update the status to "Refusée"
    accountRequest.Status = "Refusée";
    // Save the updated account request
    await accountRequest.save();
    // Send email notification
    sendEmail(accountRequest.Professionalemail, 'ALGETUN plate-forme Demande de compte refusée', 'Votre demande de compte a été refusée.');
    res.status(200).json({ message: "Statut de la demande de compte mis à jour avec succès en Refusée" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

const FindAllAccountRequests = async (req, res) => {
  try {
    const accountRequests = await AccountRequest.find();
    res.status(200).json(accountRequests);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

const FindSingleAccountRequest = async (req, res) => {
  try {
    const accountRequest = await AccountRequest.findById(req.params.id);
    if (!accountRequest) {
      return res.status(404).json({ message: "Account request not found" });
    }else {
      return res.status(200).json(accountRequest);
    }
    
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

const DeleteAccountRequest = async (req, res) => {
  try {
    const deletedAccountRequest = await AccountRequest.findByIdAndDelete(req.params.id);
    if (!deletedAccountRequest) {
      return res.status(404).json({ message: "Account request not found" });
    }
    res.status(200).json({ message: "Account request deleted successfully", deletedAccountRequest });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  AddAccountRequest,
  updateAccountRequestStatus,
  updateAccountRequestStatusToRefused,
  FindAllAccountRequests,
  FindSingleAccountRequest,
  DeleteAccountRequest
};
