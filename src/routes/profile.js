const express = require("express");
const profileRouter = express.Router();
const { userAuth } = require("../middlewares/auth");
const {validateEditProfileData}=require("../utils/validation");
const {validateEditPassword}=require("../utils/validation");
const bcrypt = require("bcrypt");
const UserModel = require("../models/user");

profileRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    const cookies = req.cookies;
    // console.log(cookies);
    // const {token}=cookies;

    // if(!token){
    //   throw new Error("Invalid Token");
    // }

    // const decodedMessage=await jwt.verify(token,"DEV@Tinder$790");
    // const {_id}=decodedMessage;

    // console.log("LoggedIn user is "+ _id);

    // const user=await UserModel.findById(_id);
    // const user=await UserModel.findOne({_id:_id}); //both will work
    // console.log(user);
    // if(!user){throw new Error("user does not exist")}
    const user = req.user;
    res.send(user);
    // res.send("reading cookie");
  } catch (err) {
    res.status(400).send("Error:" + err.message);
  }
});

profileRouter.put("/profile/edit", userAuth, async (req,res) => {
  try {
    //data sanitization
    if(!validateEditProfileData(req)){
      throw new Error("Invalid Edit Request");
    }
    const loggedInUser=req.user;
    Object.keys(req.body).forEach((key)=>loggedInUser[key]=req.body[key]);
    loggedInUser.save();
    res.send(`${loggedInUser.firstName},your profile updated successfully`);


  } catch (err){
    res.status(400).send("ERROR : "+ err.message);
  }
});

profileRouter.put("/profile/password",userAuth,async(req,res)=>{
  try{
    //Password Sanitization
    if(!validateEditPassword(req)){
      throw new Error("Invalid Edit Password Request");
    }
    const {password}=req.body;
    const passwordHash=await bcrypt.hash(password,10);
   
    const loggedInUser=req.user;
   
    // if (!loggedInUser || !loggedInUser._id) {
    //   throw new Error("User not found or unauthorized");
    // }

    // Update the user's password
    await UserModel.findByIdAndUpdate(loggedInUser._id, { password: passwordHash });

    res.send(`${loggedInUser.firstName}, your password has been updated successfully`);

  }
  catch(err){
    console.log(err);
    res.status(404).send("ERROR : "+err.message);
  }
})

module.exports = profileRouter;

