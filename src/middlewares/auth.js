const UserModel = require("../models/user");
const jwt = require("jsonwebtoken");

const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).send("Please Login");
    }
    const decodeObj = await jwt.verify(token, "DEV@Tinder$790");
    const { _id } = decodeObj;
    const user = await UserModel.findById(_id);
    if (!user) {
      throw new Error("user not found!!!!!!!!!!");
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
};



module.exports = { userAuth };

// const adminAuth = (req, res, next) => {
//   console.log("Admin auth is getting checked");
//   const token = "xyz";
//   const isAdminAuthorized = token === "xyz";
//   if (!isAdminAuthorized) {
//     res.status(401).send("Unauthorized request");
//   } else {
//     next();
//   }
// };

// const userAuth = (req, res, next) => {
//   console.log("User auth is getting checked");
//   const token = "xyz";
//   const isAdminAuthorized = token === "xyz";
//   if (!isAdminAuthorized) {
//     res.status(401).send("Unauthorized request");
//   } else {
//     next();
//   }
// };
