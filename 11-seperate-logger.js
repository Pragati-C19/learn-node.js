//Middleware
//1. Seperate the logger from main code
//2. apply logger to all routes

const express = require("express");
const app = express();
const logger=require('./logger')

app.get('/',logger,(req,res)=>{
    
    res.send("Home Page")
})

app.get('/about',(req,res)=>{
    res.send("About Page")
})

app.listen(5000, () => {
  console.log("Server is Running on Port 5000...");
});
