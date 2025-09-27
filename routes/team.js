const express= require('express');
const Team= require('../models/team');
const League= require('../models/league');
const { protect, authorizeRoles } = require('../middleware/auth.js');

const router= express.Router();

router.post('/add',protect, authorizeRoles("admin"), async(req,res)=>{
    const {name, league, shortname, stadium, coach, founded}= req.body;
    try{
        const userLeague= await League.findById(league);
        if(!userLeague)return res.status(400).json({message:"league not found"});

        const newTeam= new Team({
            name, league, shortname, stadium, coach, founded
        });
        const savedTeam= await newTeam.save();
        res.status(201).json(savedTeam);
    } catch (error) {
        res.status(500).json({message:"server error"});
    }
});
router.get('/',async(req,res)=>{
    try{
        const teams = await Team.find().populate('league','leagueName country seasons');
        res.json(teams);
    }catch(error){
        console.error(error);
        res.status(500).json({message:"server error"});
    }
})
module.exports=router;   
