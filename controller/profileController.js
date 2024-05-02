
const User = require('../models/user');
const getProfile = (req, res) => {
  // Logic to fetch user profile
  res.send('Fetching user profile...');
};

// Controller method to update user profile
exports.updateProfile = async (req, res) => {
  const userId = req.params.userId;
  const { name, email } = req.body;

  try {
    // Find the user by userId
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update user profile
    user.name = name;
    user.email = email;
    user.dateOfBirth = dateOfBirth;
    user.age = age;
    user.occupation = occupation;
    user.company = company;
    user.maritalStatus = maritalStatus;
    user.location = location;

    // Save changes to the database
    await user.save();

    res.status(200).json({ message: 'Profile updated successfully', user });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ error: 'An error occurred while updating profile' });
  }
};
// Export the controller functions
module.exports = {
  getProfile
};
