const express = require("express");
const { adminAuth, userAuth } = require("./middlewares/auth.js");
const app = express();
const connectDB = require("./config/database.js");
const UserModel = require("./models/user.js");

//converting the json data to the readable code using express.json() function  
app.use(express.json());

// app.get("/user",(req,res)=>{
//   console.log(req.body);
//   res.send("data fetched successfully...");
// })

app.post("/signup",async (req, res) => {
    //creating an instance of the user model or we can say creating a new object of user model
  const user= new UserModel(req.body);

  try{
      await user.save();
      console.log(user);
      res.send("data has got saved successfully...");
  }
  catch{
    res.status(400).send("getting error in saving the user"+err.message);
  }
});

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

//FEED API - GET /feed -get all the users from the database--

app.get("/user",async(req,res)=>{
  const userEmail=req.body.emailId;
  try{
    const user=await UserModel.find({emailId:userEmail});
    if(user.length===0){
      res.status(404).send("User not found ");
    }
    else{
      res.send(user);
    }
  }
  catch(err){
    res.status(404).send("something went wrong");
  }
})

app.get("/feed", async(req,res)=>{
  const users=await UserModel.find({});
  res.send(users);

})


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
