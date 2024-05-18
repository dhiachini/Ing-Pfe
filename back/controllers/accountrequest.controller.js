const AccountRequest = require("../models/accountrequest.model");
const ValidateAccountRequest = require("../validation/Accountrequest.validation");
const path = require("path");
const cloudinary = require("cloudinary");


const AddAccountRequest = async (req, res) => {
  try {
    const { errors, isValid } = ValidateAccountRequest(req.body);
    const result = await cloudinary.uploader.upload(req.file.path);
    if (!isValid) {
      return res.status(400).json(errors);
    }

    let patentPath = "";
    if (req.file) {
      patentPath = req.file.path; // Get the file path
    }

    const existingRequest = await AccountRequest.findOne({
      Professionalemail: req.body.Professionalemail,
    });

    if (existingRequest) {
      errors.Professionalemail = "Account request already exists";
      return res.status(400).json({message:"compte exist deja"});
    }

    const accountRequest = new AccountRequest({
      Fullname: req.body.Fullname,
      Companyname: req.body.Companyname,
      Professionalemail: req.body.Professionalemail,
      Password: req.body.Password,
      Confirmpassword: req.body.Confirmpassword,
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
    res.status(201).json({ message: "Account request added successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

const UpdateAccountRequest = async (req, res) => {
  try {
    const { errors, isValid } = ValidateAccountRequest(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const updatedFields = {
      Fullname: req.body.Fullname,
      Companyname: req.body.Companyname,
      Professionalemail: req.body.Professionalemail,
      Password: req.body.Password,
      Confirmpassword: req.body.Confirmpassword,
      Telephonecode: req.body.Telephonecode,
      Phonenumber: req.body.Phonenumber,
      Websiteurl: req.body.Websiteurl,
      Adresse: req.body.Adresse,
      Country: req.body.Country,
      City: req.body.City,
      Taxregistrationnumber: req.body.Taxregistrationnumber
    };

    // if (req.file) {
    //   updatedFields.Patent = req.file.path;
    // }

    const updatedAccountRequest = await AccountRequest.findByIdAndUpdate(
      req.params.id,
      updatedFields,
      { new: true }
    );

    if (!updatedAccountRequest) {
      return res.status(404).json({ message: "Account request not found" });
    }

    res.status(200).json({ message: "Account request updated successfully", updatedAccountRequest });
  } catch (error) {
    console.error("Error:", error.message);
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
    }
    res.status(200).json(accountRequest);
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
  UpdateAccountRequest,
  FindAllAccountRequests,
  FindSingleAccountRequest,
  DeleteAccountRequest
};
