//Middleware
//3. Multiple middleware functions

const express = require("express");
const app = express();
const logger=require('./logger')
const authorize = require("./authorize");

//We can switch the order or right same function multiple times
app.use([logger, authorize]);

app.get('/',(req,res)=>{
    console.log(req.user)
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
