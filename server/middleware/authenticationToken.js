import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

const authenticationToken = async (req,res,next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.status(401).json({message: "You don't have authorization!"})

    jwt.verify(token, process.env.SECRET, (err, user) => {
        if(err) return res.status(403).json({message: "Token is not valid!"})
        req.user = user
        next()
    })
}

export default authenticationToken