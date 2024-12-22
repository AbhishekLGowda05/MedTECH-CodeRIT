const mongoose = require('mongoose');

const familyMembersSchema = new mongoose.Schema({
 emailAddress:{type:String, required:true},
  name: { type: String, required: true },
  relationship: { type: String, required: true },

  allergiesOrSpecialNeeds: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('FamilyMembers', familyMembersSchema);