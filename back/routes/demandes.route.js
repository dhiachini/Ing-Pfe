const express = require('express');
const router = express.Router();
const multer = require('multer');
const demandeController = require('../controllers/demandes.controller');
const authenticateToken = require('../middleware/auth');
const { uploadMultiple } = require('../middleware/upload');

// Routes
router.post('/demandes', authenticateToken, uploadMultiple.array('images'), demandeController.createDemande);
router.delete('/demandes/:id', authenticateToken, demandeController.deleteDemande);
router.put('/demandes/:id', authenticateToken, uploadMultiple.array('images'), demandeController.updateDemande);
router.get('/demandes', authenticateToken, demandeController.FindAllDemandes);
router.get('/demandes/:id', authenticateToken, demandeController.FindSingleDemande);

module.exports = router;
