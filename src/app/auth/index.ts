import axios from "axios"
import express from "express"
import jwt from "jsonwebtoken"
import { UserService } from "../../services/userservice"
import {User} from "@prisma/client"
import authorizationmiddleware, { CustomRequest } from "../../middlewares/middleware"

const router = express.Router()


router.post("/login"  , async(req : express.Request , res : express.Response)=>{
    const googleAuthUrl = new URL("https://oauth2.googleapis.com/tokeninfo")
    googleAuthUrl.searchParams.set("id_token"  , req.body.token)
    const {data} = await axios.get(googleAuthUrl.toString())
    const userexsists  : User| null = await  UserService.userExsits(data.email)
    if(userexsists !==null){
        const token = jwt.sign({email : data.email  , id : userexsists.id}  ,process.env.SECRET_JWT as string)
        res.json({token : token}) 
    }
    else{
        const createdUser = await UserService.createUser({email : data.email , name : data.name , picture : data.picture})
        const token = jwt.sign({email : data.email  , id : createdUser.id}  ,process.env.SECRET_JWT as string)
        res.json({token  : token})
    }

})


router.get("/userdetail"  ,  authorizationmiddleware, async(req : CustomRequest , res : express.Response)=>{

    try {
        const user = await UserService.userExsits(req.user.email)
        res.json({user  })

    } catch (error) {
            res.json({user  : null})
    }

})

export default router ; 