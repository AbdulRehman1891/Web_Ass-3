const jwt=require("jsonwebtoken");
let verifyUserLoggedIn=(req,res,next)=>{
    let token=req.headers['token'];

    jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
        if(!err){
            req.decoded=decoded;
            console.log(req)
            next();
        }
        else{
            res.send(401).send({"Message":"You are Not Authorized"})
        }
    })
}

let checkEmploye=(req,res,next)=>{
    if(req.decoded.role=='employee'){
        next()
    }else{
        res.status(403).send({"Message":"You are not admin"})
    }
}

module.exports={
    verifyUserLoggedIn,
    checkEmploye
}