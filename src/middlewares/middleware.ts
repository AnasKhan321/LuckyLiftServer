import { Request, Response, NextFunction } from 'express';
import { UserService } from '../services/userservice';

// Define the middleware function with TypeScript types
export interface CustomRequest extends Request {
    user?: any; // Replace 'any' with the actual user type if known
}

const authorizationmiddleware = async(req: CustomRequest, res: Response, next: NextFunction) => {

    if(req.headers.authorization ==null ){
        res.status(403).json({message : "you are not authorized"})
    }else{
        const token = req.headers.authorization.split(" ")[1]
        const data = await  UserService.getuser(token)
        req.user = data 
        next();
    }
    // Call `next()` to pass control to the next middleware or route handler

};

export default authorizationmiddleware;