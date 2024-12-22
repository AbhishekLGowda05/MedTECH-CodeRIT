//a family member can only be added to the family tree if the family member is already an existing user on the app


const express = require('express');
const router = express.Router();
const family_members = require('../models/family_members.model');
const UserDetails = require('../models/user.model');


router.post('/member', async (req,res)=>{
const member = await req.body;
try {
    const emailAddress=member.emailAddress;
    const result = new family_members(member);
    const user = await UserDetails.findOne({emailAddress:emailAddress});
    if(!user){
        return res.status(400).json({msg:"not a valid user", success:"false"});

    }
    const saved = await result.save();
        return res.status(201).json({data:saved,success:true});

    
} catch (error) {
    return res.status(400).json({success:false,msg:error.message});
}

});

router.get('/all',async (req,res)=>{
    try {
        const result = await family_members.find({});
return res.status(200).json({data:result,success:true});
    } catch (error) {
        return res.status(400).json({success:false,message:error.message});
    }

})

router.get('/:emailAddress', async (req,res)=>{

    try {
        const result = await family_members.findOne({emailAddress:req.params.emailAddress});
        return res.status(200).json({data:result,success:true});

    } catch (error) {
        return res.status(400).json({success:false,message:error.message});
    }
})
module.exports = router;