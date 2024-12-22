//brownie poitns task to implement a real time api call to openFDA to get data about diagnosis and prescribed medicine

const express = require('express');
const router = express.Router();
const MedicalHistory = require('../models/medical_history.model');
const UserDetails = require('../models/user.model');
const axios = require('axios');

router.post('/recommendation', async (req, res) => {
  const body = req.body;

  const patient = await UserDetails.findOne({ emailAddress: body.emailAddress });
  if (!patient) {
    return res.status(400).json({ msg: "Not a valid user, you need to sign up first", success: false });
  }

  const medicalHistory = await MedicalHistory.findOne({ emailAddress: body.emailAddress });
  if (!medicalHistory) {
    return res.status(400).json({ msg: "No medical history associated with this user", success: false });
  }

  const dailyGoals = {
    physical: [
      { goalName: "Drink Water", description: "Consume 2 liters daily.", priority: "High" },
      { goalName: "Exercise", description: "30 mins of activity.", priority: "High" },
      { goalName: "Get Enough Sleep", description: "7-9 hours nightly.", priority: "High" }
    ],
    nutritional: [
      { goalName: "Balanced Meals", description: "Include all food groups.", priority: "High" },
      { goalName: "Limit Sugar", description: "Avoid sugary snacks.", priority: "Medium" }
    ],
    mental: [
      { goalName: "Practice Mindfulness", description: "5-10 mins meditation.", priority: "Medium" },
      { goalName: "Plan Your Day", description: "Create a to-do list.", priority: "Medium" }
    ],
    social: [
      { goalName: "Connect with Loved Ones", description: "Talk to family/friends.", priority: "Medium" }
    ],
    emotional: [
      { goalName: "Gratitude Practice", description: "List 3 things daily.", priority: "Medium" }
    ]
  };

  try {
    // Fetch diagnosis-related data from OpenFDA
    const diagnosisResult = await axios.get(
      `https://api.fda.gov/drug/label.json?search=description:${encodeURIComponent(medicalHistory.diagnosis)}&limit=5`
    );

    // Fetch medication-related data from OpenFDA 
    const medicalResult = await axios.get(
      `https://api.fda.gov/drug/label.json?search=openfda.brand_name:${encodeURIComponent(medicalHistory.medicationPrescribed)}&limit=5`
    );

    return res.status(200).json({
      data: {
        dailyGoals,
        diagnosisResult: diagnosisResult.data,
        medicalResult: medicalResult.data
      }
    });

  } catch (error) {
    console.error("Error fetching data from OpenFDA:", error.message);

    // Default responses if no data is available
    const def1 = { result: "No data for this diagnosis is available" };
    const def2 = { result: "No data for this medication is available" };

    return res.status(200).json({
      data: {
        dailyGoals,
        diagnosisResult: def1,
        medicalResult: def2
      }
    });
  }
});

module.exports = router;
