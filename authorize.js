const authorize = (req, res, next) => {
    const {user}=req.query
    if(user==='pragati'){
        req.user={name:'Pragati', id:3}
        next()
    }
    else{
        res.status(401).send("<h1>401 : Unathorize Query </h1>")
    }
//   console.log("Authorize Page");
//   next();
};

module.exports = authorize;
