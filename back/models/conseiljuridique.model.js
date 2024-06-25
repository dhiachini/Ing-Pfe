// models/TexteJuridique.js
const mongoose = require("mongoose");

const ConseilJuridiqueSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    pays: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    fileUrl: {
      type: String,
      required: true,
    },
    fileId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ConseilJuridique", ConseilJuridiqueSchema);
