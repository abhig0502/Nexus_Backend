const express = require("express");

const app = express();

// app.get("/user/:userId/:name/:password", (req, res) => {   //http://localhost:7777/user/711/abhinav/6789873
//     console.log(req.params);
//   res.send({ FirstName: "Abhinav", LastName: "Gupta" });
// });

// app.get("/user", (req, res) => {        //http://localhost:7777/user?userId=1010&name=Abhinav&password=Sainath
//     console.log(req.query);
//   res.send({ FirstName: "Abhinav", LastName: "Gupta" });
// });

app.get("/user", (req, res) => {
  res.send({ FirstName: "Abhinav", LastName: "Gupta" });
});

app.post("/user", (req, res) => {
  //store the data to the DB
  res.send("data has been saved successfully ");
});

app.delete("/user", (req, res) => {
  //delete data from the DB
  res.send("data has been deleted successfully ");
});

app.get("/", (req, res) => {
  res.send("Hello from the Dashboard!"); //this function is known as request handler
});

app.get("/hello", (req, res) => {
  res.send("Hello hello!");
});

app.get("/test", (req, res) => {
  res.send("Hello from the server test!");
});

app.listen(7777, () => {
  console.log("server is successfully listening to port 7777...");
});
