const express= require('express');
const user= require('../models/users');
const {generateToken}= require('../middleware/utils');

const router= express.Router();

router.post("/register",async(req,res)=>{
    try{
        const{ name, email, password,role } = req.body;
        const UserExists= await user.findOne({email});
        if(UserExists) return res.status(400).json({message:"User already exists"});
        
        const user =await user.create({name , email ,password,role});

        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            role:user.role,
            token:generateToken(user._id,user.role)
        });
    } catch(error){
        res.status(500).json({message:"server error"});
    }
});
module.exports= router;

