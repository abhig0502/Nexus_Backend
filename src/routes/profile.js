const express = require("express");
const profileRouter = express.Router();
const { userAuth } = require("../middlewares/auth");

profileRouter.get("/profile", userAuth, async (req, res) => {
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

module.exports =  profileRouter ;
