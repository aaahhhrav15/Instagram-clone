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
        return res.status(422).json({error : "Please fill all the details"})
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
            .then(user => {res.json({message : "Registered successfully"})})
            .catch(err=>{console.log(err)});

        })
    })
    

})

router.post("/signin" , (req,res)=>{
    const {email,password}=req.body;

    if(!email || !password)
    {
        return res.status(422).json({error:"Enter email and password"});
    }
    User.findOne({email:email}).then((savedUser)=>{
        if(!savedUser)
        {
            return res.status(422).json({error:"Invalid email"});
        }
        bcrypt.compare(password, savedUser.password).then((match)=>{
            if(match)
            {
                return res.status(200).json({message:"Signed in successfully"});
            }
            else
            {
                return res.status(422).json({error:"Invalid password"});
            }
        }).catch((err)=>{
            console.log(err);
        })
    })
})

module.exports = router;