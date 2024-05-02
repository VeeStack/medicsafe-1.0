
// Import the profileController
const profileController = require('../controller/profileController');

const { Sequelize, DataTypes } = require('sequelize');
const User = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    verificationCode: {
      type: DataTypes.STRING,
      allowNull: true // Allow null until verification is completed
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
  
  return User;  
};

module.exports = User;
