const express= require('express');
const Team = require('../models/team');
const League = require('../models/league');
const { protect, authorizeRoles } = require('../middleware/auth.js');

const router = express.Router();

router.post('/add',protect, authorizeRoles('admin'),async(req,res)=>{
    const{leagueName, country ,seasons}=req.body;
    try {
        const newLeague= new League({
            leagueName, country , seasons
        });
        const savedLeague= await newLeague.save();
        res.status(201).json(savedLeague); 
    }catch(error){
        res.status(500).json({message:"server error"});
    }
});
router.get('/',async(req,res)=>{
    try{
        const leagues=await League.find();
        res.json(leagues);
    }catch(error){
        console.error(error);
        res.status(500).json({message:"server error"});
    }
});
router.get('/:id/teams',async(req,res)=>{
    try{
        const leagueId=req.params.id;
        const teams= await Team.find({league:leagueId}).populate('league','leagueName country seasons');
        res.json(teams);
    }catch(error){
        console.error(error);
        res.status(500).json({message:"server error"});
    }
});
module.exports=router;