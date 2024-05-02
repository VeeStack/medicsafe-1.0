
const express = require('express');
const router = express.Router();
const { submitMedicalInfo } = require('../controller/medicalController');
const medicalRecordController = require('../controller/medicalRecordController');
const authenticationMiddleware = require('../middleware/authentication');

// Define medical record routes
router.get('/', authenticationMiddleware, medicalRecordController.getAll);
router.post('/', authenticationMiddleware, medicalRecordController.create);
router.get('/:id', authenticationMiddleware, medicalRecordController.getOne);
router.put('/:id', authenticationMiddleware, medicalRecordController.update);
router.delete('/:id', authenticationMiddleware, medicalRecordController.delete);
router.post('/submit-medical-info', submitMedicalInfo);



module.exports = router;




