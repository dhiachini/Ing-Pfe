const mongoose = require('mongoose');

// Define the schema for the Offer model
const offerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  subcategory: {
    type: String,
    required: true
  },
  transactionType: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  images: {
    type: [String], // Array of image URLs or paths
    default: []
  },
  // You can add more fields as needed
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

// Create the Offer model
const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;
