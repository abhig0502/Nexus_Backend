const express=require("express");

const app=express();

app.get("/", (req, res) => {
    res.send("Hello from the Dashboard!"); //this function is known as request handler
  });
  
  app.get("/hello", (req, res) => {
    res.send("Hello hello!"); //this function is known as request handler
  });
  
  app.get("/test", (req, res) => {
    res.send("Hello from the server test!"); //this function is known as request handler
  });
  
  app.listen(7777, () => {
    console.log("server is successfully listening to port 7777...");
  });
  