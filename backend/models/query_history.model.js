const mongoose = require('mongoose');

const queryHistorySchema = new mongoose.Schema({
  queryHistoryId: { type: mongoose.Schema.Types.ObjectId, required: true },
  queryId: { type: mongoose.Schema.Types.ObjectId, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  queryText: { type: String, required: true },
  expertResponse: { type: String },
  dateOfResponse: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('QueryHistory', queryHistorySchema);