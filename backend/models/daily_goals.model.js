const mongoose = require('mongoose');

const dailyGoalsSchema = new mongoose.Schema({
  goalId: { type: mongoose.Schema.Types.ObjectId},
  goalName: { type: String },
  description: { type: String },
  
}, { timestamps: true });

module.exports = mongoose.model('DailyGoals', dailyGoalsSchema);