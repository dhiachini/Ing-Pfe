// accountrequest.model.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccountRequestSchema = new Schema(
  {
    Fullname: String,
    Companyname: String,
    Professionalemail: String,
    Password: String,
    Confirmpassword: String,
    Telephonecode: String,
    Phonenumber: String,
    Websiteurl: String,
    Adresse: String,
    Country: String,
    City: String,
    Taxregistrationnumber: String,
    Patent: String,
    Status: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("AccountRequest", AccountRequestSchema);
