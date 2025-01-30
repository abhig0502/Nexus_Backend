const express = require("express");
const authRouter = express.Router();
const { validateSignUpData } = require("../utils/validation.js");
const UserModel = require("../models/user.js");
const bcrypt = require("bcrypt");

authRouter.post("/signup", async (req, res) => {
  try {
    //Validation of Data
    validateSignUpData(req);

    //Encrypt the Password
    const { firstName, lastName, emailId, password } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);

    //creating an instance of the user model or we can say creating a new object of user model
    const user = new UserModel({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });
    const savedUser = await user.save();
    
    const token = await savedUser.getJWT();
      res.cookie("token", token, {
        expires: new Date(Date.now() + 24 * 360000),
      });

    res.json({
      message: "data has got saved successfully...",
      data: savedUser,
    });
  } catch (err) {
    res.status(400).send("Error:" + err.message);
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;

    const user = await UserModel.findOne({ emailId: emailId });
    if (!user) {
      throw new Error(
        "Invalid Credentials (emailId not found in the DB) plz signUp first"
      );
    }
    // console.log(user.password);
    // const isPasswordValid = await bcrypt.compare(password, user.password);
    const isPasswordValid = await user.validatePassword(password);
    if (isPasswordValid) {
      //Create JWT Token

      // const token=await jwt.sign({ _id:user._id},"DEV@Tinder$790",{expiresIn:"1d"});
      const token = await user.getJWT();
      // console.log(token);

      //Add token to the cookie and send it back to the user
      res.cookie("token", token, {
        expires: new Date(Date.now() + 24 * 360000),
      });

      res.send({ user });
    } else {
      throw new Error("Invalid Credentials");
    }
  } catch (err) {
    res.status(400).send("ERROR:" + err.message);
  }
});

authRouter.post("/logout", async (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
  });
  res.send("logged out successfully !!!");
});

module.exports = authRouter;
