const experss = require("express");
const router = experss.Router();
const UserDB = require('../models/userModel')
const ResumeProfileDB = require('../models/profileResumeModel')


router.post('/sign-up', async(req,res)=>{
    try {
        const {email , password } = req.body
        const user = await UserDB.findOne({email})
        if(user) return res.status(400).json({error:"Email already registered"})
        
        const newUser = new UserDB({
            email , password
        })
        await newUser.save()

        res.json({Success:"Email Id registered"})
    }
    catch (error) {
        res.status(400).json(error)
    }
})

router.post('/login', async (req,res)=>{
    try {
        const {email , password } = req.body
        const user = await UserDB.findOne({email})
        if(!user) return res.status(404).json({error:"User not found"})
        const is_resume = await ResumeProfileDB.findOne({user:user._id})
        
        if(!is_resume){
            const resume = new ResumeProfileDB({user:user._id})
            await resume.save()   
        }
        res.json({user , is_resume})
    } catch (error) {
        console.log("error")
        res.status(400).json(error)
    }
})










module.exports = router;