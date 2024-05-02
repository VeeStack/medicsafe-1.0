
const express = require('express');
const router = express.Router();
const profileController = require('../controller/profileController');

// Route for updating user profile
router.put('/profile/:userId', profileController.updateProfile);

module.exports = router;
