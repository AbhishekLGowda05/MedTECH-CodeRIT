const mongoose = require('mongoose');

const userDetailsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  
  emailAddress: { type: String, required: true },
  
  password: { type: String ,  required: true  },
  
  accountType:{ type: String ,  required: true},
  
  password:  { type: String, required: true }
  
}, { timestamps: true });

module.exports = mongoose.model('UserDetails', userDetailsSchema);