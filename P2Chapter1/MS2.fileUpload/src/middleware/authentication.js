const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticateJWT = (req,res, next)=>{
     const token = req.header("Authorization").split(" ")[1];
     if(!token){
          return res.status(401).json({error:{description:"No token provided, authorization denied"}});
     }

     try{
          const decoded = jwt.verify(token,process.env.JWT_SECRET);
          req.user = decoded;
          next();
     } catch(error){
          return res.status(401).json({error:{description:"Invalid token."}});
     }
}
module.exports = authenticateJWT;