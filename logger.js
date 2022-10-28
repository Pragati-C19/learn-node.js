const logger=(req,res,next)=>{
    const method= req.method
    const url = req.url
    const time=new Date().getFullYear()

    console.log(method,url,time)
    //res.send('Testing')
    next()          //you can successfully load next page  
}

module.exports=logger