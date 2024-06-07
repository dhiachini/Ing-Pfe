const express = require('express');
const router = express.Router();
const multer = require('multer');
const offerController = require('../controllers/offers.controller');
const authenticateToken = require('../middleware/auth');
const { uploadMultiple } = require('../middleware/upload');

// Routes
router.post('/offers', authenticateToken, uploadMultiple.array('images'), offerController.createOffer);
router.delete('/offers/:id', authenticateToken, offerController.deleteOffer);
router.put('/offers/:id', authenticateToken, uploadMultiple.array('images'), offerController.updateOffer);
router.get('/offers', authenticateToken, offerController.FindAllOffers); // Require auth
router.get('/offers/all', offerController.findAllOffersForAllUsers); // No auth required
router.get('/offers/:id', authenticateToken, offerController.FindSingleOffer);

module.exports = router;
