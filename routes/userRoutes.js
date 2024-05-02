const express = require('express');
const router = express.Router();


// Import userController and middleware
const profileController = require('../controller/profileController');
const authenticationMiddleware = require('../middleware/authenticationMiddleware');

// Define user routes
router.get('/profile', authenticationMiddleware, profileController.getProfile);
router.put('/profile', authenticationMiddleware, profileController.updateProfile);

module.exports = router;
