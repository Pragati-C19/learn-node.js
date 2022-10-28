//Middleware
//req => middleware =>res

const express = require("express");
const app = express();

const logger=(req,res,next)=>{
    const method= req.method
    const url = req.url
    const time=new Date().getFullYear()

    console.log(method,url,time)
    //res.send('Testing')
    next()          //you can successfully load next page  
}

app.get('/',logger,(req,res)=>{
    
    res.send("Home Page")
})

app.get('/about',(req,res)=>{
    res.send("About Page")
})

app.listen(5000, () => {
  console.log("Server is Running on Port 5000...");
});
