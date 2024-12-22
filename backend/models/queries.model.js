const mongoose = require('mongoose');

const queriesSchema = new mongoose.Schema({
  queryId: { type: mongoose.Schema.Types.ObjectId},
  emailAddress: { type:String },
  queryText: { type: String, required: true },
  queryResponse:{ type: String},
  responseBy:{type:String},
  answered:{type:Boolean, default:false}
  
}, { timestamps: true });

module.exports = mongoose.model('Queries', queriesSchema);