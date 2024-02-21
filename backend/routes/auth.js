const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User=mongoose.model("User"); 
const bcrypt = require("bcrypt");

router.get("/", (req,res)=>{
    res.send("Hello World");
})

router.post("/signup",(req,res)=>{
    const {name,username,email,password}=req.body;

    if(!name || !username || !email || !password)
    {
        res.status(422).json({error : "Please fill all the details"})
    }
    User.findOne({$or:[{email:email},{username:username}]}).then((savedUser)=>{
        if(savedUser)
        {
            return res.status(422).json({error:"User already exist"});
        }
        bcrypt.hash(password,12).then((hashedPassword)=>{
          
            const user=new User({
                name,
                username,
                email,
                password:hashedPassword
            })
            
            user.save()
            .then(user => {res.json("Message saved successfully")})
            .catch(err=>{console.log(err)});

        })
    })
    

})

module.exports = router;