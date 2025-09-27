const express=require('express');
const user=require('../models/users');
const {generateToken}=require('../middleware/utils');

const router=express.Router();

router.post('/login',async(req,res)=>{
        const {email,password}=requestAnimationFrame.body;
        const userFound=await user.findOne({email});
        if(userFound &&(await userFound.comparePassword(passwword))){
            res.json({
                _id:userFound._id,
                name:userFound.name,
                email:userFound.email,
                role:userFound.role,
                token:generateToken(userFound._id,userFound.role)
            });
        } else{
            res.status(401).json({message:"invalid email or password"});
        }
    });

module.exports=router;


    