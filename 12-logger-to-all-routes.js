//Middleware
//2. apply logger to all routes

const express = require("express");
const app = express();
const logger=require('./logger')

app.use(logger)
// app.use('/api',logger)

app.get('/',(req,res)=>{
    
    res.send("Home Page")
})

app.get('/about',(req,res)=>{
    res.send("About Page")
})

app.get('/api/products',(req,res)=>{
    res.send("Product Page")
})

app.get('/api/items',(req,res)=>{
    res.send("Items Page")
})

app.listen(5000, () => {
  console.log("Server is Running on Port 5000...");
});
