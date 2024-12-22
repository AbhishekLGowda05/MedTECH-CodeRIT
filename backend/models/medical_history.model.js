const mongoose = require('mongoose');

const medicalHistorySchema = new mongoose.Schema({
  emailAddress:{type:String},
  diagnosis: { type: String },
  dateOfDiagnosis: { type: Date},
  treatingPhysician: { type: String },
  medicationPrescribed: { type: String },
  
  allergies: { type: String },
  
  chronicConditions: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('MedicalHistory', medicalHistorySchema);