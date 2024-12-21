const express = require('express');
const router = express.Router();
const userRoutes= require('./userRoutes');
const dailyGoalsRoutes= require('./dailyGoalsRoutes');
const familyRoutes = require('./familyRoutes');
const queryRoutes= require('./queryRoutes');
const medicalHistoryRoutes = require('./medicalHistoryRoutes');
console.log('Main routes loaded');
router.use('/user',userRoutes);
router.use('/dailyGoals',dailyGoalsRoutes);
router.use('/family',familyRoutes);
router.use('/queries',queryRoutes);
router.use('/personal-history',medicalHistoryRoutes)    

module.exports = router;