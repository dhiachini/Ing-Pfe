// accountrequest.model.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccountRequestSchema = new Schema(
  {
    Fullname: {
      type: String,
    },
    Companyname: {
      type: String,
    },
    Professionalemail: {
      type: String,
    },
    Password: {
      type: String,
    },
    Confirmpassword: {
      type: String,
    },
    Telephonecode: {
      type: String,
    },
    Phonenumber: {
      type: String,
    },
    Websiteurl: {
      type: String,
    },
    Adresse: {
      type: String,
    },
    Country: {
      type: String,
    },
    City: {
      type: String,
    },
    Taxregistrationnumber: {
      type: String,
    },
    Patent: {
      type: String,
    },
    Status: {
        type: String,
      }
  },
  { timestamps: true }
);

module.exports = mongoose.model("accountrequests", AccountRequestSchema);
