const express = require('express');
const router = express.Router();
const formserviceController = require('../controllers/formservice.controller');
const authenticateToken = require('../middleware/auth');

// Routes
router.post('/formservices', authenticateToken, formserviceController.createFormservice);
router.delete('/formservices/:id', authenticateToken, formserviceController.deleteFormservice);
router.put('/formservices/:id', authenticateToken, formserviceController.updateFormservice);
router.get('/formservices', authenticateToken, formserviceController.findAllFormservices);
router.get('/formservices/all', formserviceController.findAllFormsericesForAllUsers);
router.get('/formserviceswithoutauth/:id', formserviceController.findSingleFormserviceWtauth);
router.get('/formservices/:id', authenticateToken, formserviceController.findSingleFormservice);
router.get('/formservices/:id/user', formserviceController.getUserDetailsFromFormservice);


module.exports = router;
