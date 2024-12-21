const mongoose = require('mongoose');

const queriesSchema = new mongoose.Schema({
  queryId: { type: mongoose.Schema.Types.ObjectId, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  queryText: { type: String, required: true },
  
}, { timestamps: true });

module.exports = mongoose.model('Queries', queriesSchema);