const JWT_SECRET = require("./config");
const jwt = require("jsonwebtoken");


const authMiddleware = (req,res,next)=>{

    const authHeader = req.headers.authorization;

    // console.log(authHeader);

    if(!authHeader || !authHeader.startsWith('Bearer')){
        return res.status(403).json({});
    }

    const token = authHeader.split(' ')[1];

    console.log("this is token",token);
    
    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        req.userId = decoded.userId;

        next();
    } catch (err) {

        console.log("error",err);
        return res.status(403).json({
            status:false,
            error:err
        });
    }

 
};

module.exports = {
    authMiddleware
}