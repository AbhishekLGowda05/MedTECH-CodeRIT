const express = require('express');
const router = express.Router();
const queries = require('../models/queries.model');
const UserDetails = require('../models/user.model');


router.post('/query', async (req,res)=>{
   try {
    const {emailAddress,queryText} = req.body;
    const query = new queries({emailAddress,queryText});
    const savedQuery =  await query.save();
    return res.status(201).json({data:savedQuery,success:"true"});

    
   } catch (error) {
    console.error(error.message);
    return res.status(500).json({success:"false",error:error.message});
    
   }
})

router.get('/all', async (req,res)=>{
    try {
        const allQueries= await queries.find({});
        res.status(200).json({allQueries});
    } catch (error) {
        return res.status(400).json({success:"false",msg:error.message})
    }
  
    



})

router.post('/:queryId/answer',async (req,res)=>{
const {queryId}= req.params;
const {queryResponse,emailAddress}= req.body;
try {
    const user = await UserDetails.findOne({emailAddress});
    if(!user){
        return res.status(404).json({success:"false",msg:"User not found"})
    }
    if(user.accountType!="doctor"){
        return res.status(403).json({success:"false",msg:"Only doctors can answer queries"});
    }
    const query = await queries.findById(queryId);
    if(!query){
        return res.status(404).json({success:"false",msg:"Query not found"})
    }
    if(query.answered){
        return res.status(403).json({success:"false",msg:"Query already answered"})
    }
    query.queryResponse=queryResponse;
    query.responseBy=user.emailAddress;
    query.answered = true;
    await query.save();
    return res.status(201).json({message:"response addded successfully",success:"true", data: query});

} catch (error) {
    return res.status(400).json({data:error.message, success: "false"});
}

})

module.exports = router;