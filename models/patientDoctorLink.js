
// models/PatientDoctorLink.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PatientDoctorLink = sequelize.define('PatientDoctorLink', {
  patientId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  doctorId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = PatientDoctorLink;
