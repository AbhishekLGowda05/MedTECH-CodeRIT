const express = require('express');
const router = express.Router();
const UserDetails = require('../models/user.model');
const queries = require('../models/queries.model');


router.post('/', async (req,res)=>{
    const emailAddress = req.body.emailAddress;
    const name = req.body.name;

    const result =await  UserDetails.findOne({emailAddress:emailAddress});
    if(!result){
        return res.status(400).json({success:false,msg:"not a valid user email"});
    }
    
    if(result.accountType==="doctor"){
    const doc = await queries.find({responseBy:emailAddress||name});
    if(!doc){
        return res.status(400).json({success:false,msg:"no patients"});
    }
    else{
       
        return res.status(200).json({success:true,data:doc, msg:"patients found"});

    }
}
});
module.exports=router;
