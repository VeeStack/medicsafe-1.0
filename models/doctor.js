
// models/Doctor.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Doctor = sequelize.define('Doctor', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  phoneNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  doctorID: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  doctorSpecialization: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false
  },
  doctorBio: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  // Add other fields specific to doctors
});

module.exports = Doctor;
