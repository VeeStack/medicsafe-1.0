
// models/MedicalRecord.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const MedicalRecord = sequelize.define('MedicalRecord', {
  patientId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  doctorId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  // Add other fields for medical data
});

module.exports = MedicalRecord;
