const mongoose = require("mongoose");

// Define the schema for the Offer model
const formserviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    servicetype: {
      type: String,
      required: true,
    },
    prestationadress: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "AccountRequest",
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

// Create the Offer model
const formservice = mongoose.model("formservice", formserviceSchema);

module.exports = formservice;
