const mongoose = require('mongoose');

const medicalHistorySchema = new mongoose.Schema({
  
  diagnosis: { type: String, required: true },
  dateOfDiagnosis: { type: Date, required: true },
  treatingPhysician: { type: String },
  medicationPrescribed: { type: String },
  
  allergies: { type: String },
  
  chronicConditions: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('MedicalHistory', medicalHistorySchema);