const express = require('express');
const router = express.Router();
const medical_history = require('../models/medical_history.model');

router.post('/medHistory', async (req, res) => {
    const medHistory = req.body;
    const newMed = new medical_history(medHistory);
    
    try {
     
             
        await newMed.save();
        
        return res.status(201).json({ msg: "Medical history saved successfully", success: "true" });
    } catch (error) {
        return res.status(500).json({ message: error.message, success: "false" });
    }
});

router.get('/showHistory',async (req,res)=>{
const result = await medical_history.find({});
return res.status(200).json({data:result,success:true});

})
module.exports = router;