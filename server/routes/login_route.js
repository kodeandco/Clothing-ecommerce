import express from 'express';
import User from '../models/user_model.js'; 

const router= express.Router();
router.post('/', async(req,res)=>
{
    const {identifier,password}=req.body;
    try{
        const normalizedIdentifier=identifier.toLowerCase();
        
            const user= await User.findOne({identifier:normalizedIdentifier, password:password});
            if(user){
                res.status(200).json({message:'Login successful'});

        
    }}catch(err){
        console.error('Login error:', err);
        res.status(500).json({ message: 'Server error' });
    }
})
export default router;