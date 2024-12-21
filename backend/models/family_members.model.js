const mongoose = require('mongoose');

const familyMembersSchema = new mongoose.Schema({
  memberId: { type: mongoose.Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  relationship: { type: String, required: true },

  allergiesOrSpecialNeeds: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('FamilyMembers', familyMembersSchema);