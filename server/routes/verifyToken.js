const jwt = require("jsonwebtoken")

const verifyToken = (req,res,next)=>{
    const authHeader = req.headers.token
    if(authHeader){
        const user = await jwt.verify(token,process.env.JWT_SEC)
        if(user){
            req.user = user
            
        }
        else{
            return res.status(403).send("Invalid token")
        }
        next()
    }
    else{
        return res.status(401).send("You are not authenticated")
    }
}

const verifyTokenAndAuthorisation = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user._id === req.params._id || req.user.isAdmin){
            next()
        }
        else{
            res.status(403).json("")
        }
    })
}


module.exports = {verifyToken}













