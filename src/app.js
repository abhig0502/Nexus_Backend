const express = require("express");
const { userAuth } = require("./middlewares/auth.js");
const app = express();
const connectDB = require("./config/database.js");
const UserModel = require("./models/user.js");
const { validateSignUpData } = require("./utils/validation.js");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

//converting the json data to the readable code using express.json() function
app.use(express.json());
app.use(cookieParser());

// app.get("/user",(req,res)=>{
//   console.log(req.body);
//   res.send("data fetched successfully...");
// })

//------to be deleted part
// app.post("/signup", async (req, res) => {
//   try {
//     //Validation of Data
//     validateSignUpData(req);

//     //Encrypt the Password
//     const { firstName, lastName, emailId, password } = req.body;
//     const passwordHash = await bcrypt.hash(password, 10);

//     //creating an instance of the user model or we can say creating a new object of user model
//     const user = new UserModel({
//       firstName,
//       lastName,
//       emailId,
//       password: passwordHash,
//     });
//     await user.save();
//     console.log(user);
//     res.send("data has got saved successfully...");
//   } catch (err) {
//     res.status(400).send("Error:" + err.message);
//   }
// });

// app.post("/login", async (req, res) => {
//   try {
//     const { emailId, password } = req.body;

//     const user = await UserModel.findOne({ emailId: emailId });
//     if (!user) {
//       throw new Error("Invalid Credentials (emailId not found in the DB) plz signUp first");
//     }
//     // console.log(user.password);
//     // const isPasswordValid = await bcrypt.compare(password, user.password);
//     const isPasswordValid=await user.validatePassword(password);
//     if (isPasswordValid) {
//       //Create JWT Token

//       // const token=await jwt.sign({ _id:user._id},"DEV@Tinder$790",{expiresIn:"1d"});
//       const token=await user.getJWT();
//       // console.log(token);

//       //Add token to the cookie and send it back to the user
//       res.cookie("token", token,{expires:new Date(Date.now() + 24 * 360000 )});

//       res.send("user loggedIn successfully ");
//     } else {
//       throw new Error("Invalid Credentials");
//     }
//   } catch (err) {
//     res.status(400).send("ERROR:" + err.message);
//   }
// });
// --------------

const authRouter = require("./routes/auth.js");
const profileRouter = require("./routes/profile.js");
const requestRouter = require("./routes/request.js");

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);

// app.get("/profile", userAuth,async (req, res) => {

//   try {
//     const cookies = req.cookies;
//     // console.log(cookies);
//     // const {token}=cookies;

//     // if(!token){
//     //   throw new Error("Invalid Token");
//     // }

//     // const decodedMessage=await jwt.verify(token,"DEV@Tinder$790");
//     // const {_id}=decodedMessage;

//     // console.log("LoggedIn user is "+ _id);

//     // const user=await UserModel.findById(_id);
//     // const user=await UserModel.findOne({_id:_id}); //both will work
//     // console.log(user);
//     // if(!user){throw new Error("user does not exist")}
//     const user=req.user;
//   res.send(user);
//     // res.send("reading cookie");

//   }
//   catch (err) {
//     res.status(400).send("Error:" + err.message);
//   }
// });

// app.post("/sendConnectionRequest",userAuth,async (req,res)=>{
//   const user=req.user;
//    //Sending a connection request
//    console.log("Sending a connection request");
//    res.send(user.firstName + " sent the connection request");

// })

//old signup API
// app.post("/signup",async (req, res) => {
//     //creating an instance of the user model or we can say creating a new object of user model
//   const user= new UserModel({
//     firstName: "Akshay",
//     lastName: "Saini",
//     emailId: "akshaysaini@gmail.com",
//     password: "Akshay@123",
//     age: 21,
//     gender: "male",
//   });

//   try{
//       await user.save();
//       res.send("data has got saved successfully...");
//   }
//   catch{
//     res.status(400).send("getting error in saving the user"+err.message);
//   }
// });

// //get user by email
// app.get("/user", async (req, res) => {
//   const userEmail = req.body.emailId;
//   try {
//     const user = await UserModel.find({ emailId: userEmail });
//     if (user.length === 0) {
//       res.status(404).send("User not found ");
//     } else {
//       res.send(user);
//     }
//   } catch (err) {
//     res.status(404).send("something went wrong");
//   }
// });

// //FEED API - GET /feed -get all the users from the database--
// app.get("/feed", async (req, res) => {
//   const users = await UserModel.find({});
//   console.log(users);
//   res.send(users);
// });

// //delete a user from the database
// app.delete("/user", async (req, res) => {
//   const userId = req.body.userId;
//   try {
//     // const user=UserModel.findByIdAndDelete({_id: userId}); this is also correct
//     const user = await UserModel.findByIdAndDelete(userId);
//     res.send("user deleted");
//   } catch (err) {
//     res.status(400).send("something went WronG");
//   }
// });

// //update data of the user
// app.patch("/user", async (req, res) => {
//   const userId = req.body.userId;
//   const data = req.body;

//   try {
//     // const user=await UserModel.findByIdAndUpdate({_id:userId},data); //this is also fine
//     //{returnDocument:"before"}-->it will return the document before update
//     //{returnDocument:"after"}-->it will return the document after update [options]
//     //bydefault it returns the document before update
//     // const user=await UserModel.findByIdAndUpdate(userId,data,{returnDocument:"before"});

//     const ALLOWED_UPDATES = [
//       "userId",
//       "lastName",
//       "photoUrl",
//       "about",
//       "gender",
//       "age",
//       "skills",
//     ];
//     const isUpdateAllowed = Object.keys(data).every((k) =>
//       ALLOWED_UPDATES.includes(k)
//     );
//     if (!isUpdateAllowed) {
//       throw new Error("Update not allowed");
//     }

//     const user = await UserModel.findByIdAndUpdate(userId, data, {
//       returnDocument: "after",
//       runValidators: true,
//     });

//     console.log(user);
//     res.send("user updated successfully");
//   } catch (err) {
//     res
//       .status(404)
//       .send("Something went wrong user couldn't get updated" + err.message);
//   }
// });

connectDB()
  .then(() => {
    console.log("Database connection established!!");

    app.listen(7777, () => {
      console.log("server is successfully listening to port 7777...");
    });
  })
  .catch((err) => {
    console.log("Database cannot be connected!!");
    console.log(err);
  });
