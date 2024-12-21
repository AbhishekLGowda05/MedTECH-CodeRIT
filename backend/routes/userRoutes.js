const express = require('express');
const router = express.Router();
const UserDetails = require('../models/user.model');


router.post("/",async (req,res)=>{
const UserData = req.body;
if(!UserData.name||!UserData.emailAddress){
    return res.status(400).json({msg :"please enter all the required fields", success:"false"});

}
const newUser = new UserDetails(UserData);
try {
    await newUser.save();
    res.status(201).json({success:"true",data:newUser});
} catch (error) {
    console.error("error in create product : ",error.message);
}
})
router.post("/login",async (req,res)=>{
    const {emailAddress,password} = req.body;
    if(!emailAddress||!password){
        return res.status(400).json({msg :"please enter all the required fields", success:"false"
    })
    }
    try {
        const result = await UserDetails.findOne({emailAddress});
        if(!result){
            return res.status(400).json({msg :"sign up", success:"false"})
        }
        if(result.password!=password){
            return res.status(400).json({msg :"invalid password", success:"false"})
        }
        console.log("logged in successfully");
        res.status(200).json({success:"true",data:result});
        
    } catch (error) {
        console.error('Error during login:', error.message);
        res.status(500).json({ success: false, msg: 'Internal server error' });
    }
})
module.exports = router;