
const express = require('express');
const router = express.Router();
const { authenticateToken, authorizeRole } = require('../middleware/authMiddleware');
const { uploadAndExtractText } = require('Tessaract.js');
const { uploadAndExtractText } = require('../controller/ocrController');
const { uploadFile } = require('../middleware/fileUploadMiddleware');


// Route to upload image and extract text
router.post('/upload-and-extract-text', uploadAndExtractText);
router.post('/upload-file', authenticateToken, authorizeRole(['doctor']), uploadFile, ocrController.uploadFile);

module.exports = router;
