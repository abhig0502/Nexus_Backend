const express = require("express");
const { adminAuth, userAuth } = require("./middlewares/auth.js");
const app = express();

// app.get("/user/:userId/:name/:password", (req, res) => {   //http://localhost:7777/user/711/abhinav/6789873
//     console.log(req.params);
//   res.send({ FirstName: "Abhinav", LastName: "Gupta" });
// });

// app.get("/user", (req, res) => {        //http://localhost:7777/user?userId=1010&name=Abhinav&password=Sainath
//     console.log(req.query);
//   res.send({ FirstName: "Abhinav", LastName: "Gupta" });
// });

// app.get("/user", (req, res) => {
//   res.send({ FirstName: "Abhinav", LastName: "Gupta" });
// });

// app.post("/user", (req, res) => {
//   //store the data to the DB
//   res.send("data has been saved successfully ");
// });

// app.delete("/user", (req, res) => {
//   //delete data from the DB
//   res.send("data has been deleted successfully ");
// });

// app.get("/", (req, res) => {
//   res.send("Hello from the Dashboard!"); //this function is known as request handler
// });

// app.get("/hello", (req, res) => {
//   res.send("Hello hello!");
// });

// app.get("/test", (req, res) => {
//   res.send("Hello from the server test!");
// });

//------------------------------
//middlewares and error handling

// app.use(
//   "/user",
//   (req, res,next) => {
//     console.log("Handling the route user!!");
//     next();
//   },
//   (req, res,next) => {
//     console.log("Handling the route user 2!!");
//     //res.send("2nd response!!");
//     next();
//   },
//   (req, res,next) => {
//     console.log("Handling the route user 3!!");
//     //res.send("3nd response!!");
//     next();
//   },
//   (req, res,next) => {
//     console.log("Handling the route user 4!!");
//     // res.send("4nd response!!");
//     // next();
//   }
// );

//POINTS TO REMEBER
//IF THE RESPONSE IS NOT SEND IT WILL THROUGH AN ERROR (EXECUTE THE CODE LINE BY LINE)
//IF THE next() IS CALLED AT THE END THEN IT WILL NOT FIND ANY OTHER MIDDLEWARE OR RESPONSE HANDLER -
//AND IT WILL THROUGH ERROR

//second way of creating the route handlers or middlewares is

// app.get("/user", (req, res, next) => {
//   console.log("Handling the route user 1");
// //   res.send("1st response");
//   next();
// });

// app.get("/user",(req,res,next)=>{
//     console.log("hadling the route user 2");
//     res.send("2nd response");
//     // next();
// })

// this was the second way
// --------------------------------------

// app.get("/admin/getAllData", (req, res) => {
//   //logic of checking if the request is authorized
//   const token = "xyz";
//   const isAdminAuthorized = token === "xyz";
//   if (isAdminAuthorized) {
//     res.send("All data sent");
//   } else {
//     res.status(401).send("Unauthorized request");
//   }
// });

// app.get("/admin/deleteUser", (req, res) => {
//   //logic of checking if the request is authorized
//   const token = "xyz";
//   const isAdminAuthorized = token === "xyz";
//   if (isAdminAuthorized) {
//     res.send("Deleted a user");
//   } else {
//     res.status(401).send("Unauthorized request");
//   }
// });
//now if we want to authenticate for every admin api then we have to write the logic at every response handler
//so in order to avoid that issue we can do that like this

//Handle Auth middleware for all GET,POST.... requests

app.use("/admin", adminAuth);


app.get("/admin/getAllData", (req, res) => {
    res.send("All request send");
});

app.get("admin/deleteUser", (req, res) => {
    res.send("Deleted a user");
});

//if i want to check for the user authorization i can do it like this also 

app.get("/user",userAuth, (req, res) => {        //here i have passed userAuth after the /route it work fine
  res.send("All request send");
});

app.listen(7777, () => {
  console.log("server is successfully listening to port 7777...");
});
