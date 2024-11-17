import { prismaClient } from "../client";
import { User } from "../interfaces";
import jwt from "jsonwebtoken"

export class UserService {

    public static  async  createUser(data : User)  {
        const newUser = await  prismaClient.user.create({
            data : {
                email : data.email , 
                name  : data.name , 
                profilepicture : data.picture 
            }
        })

        return newUser ; 
    }

    public static async userExsits(email : string){
        const userexsists =  await  prismaClient.user.findUnique({where : {email : email}  ,   include: {
            votes: {
                include : {
                    event : true 
                },
                orderBy: {
                    createdAt: 'desc' 
                }
            }, 
          },  })
        return userexsists ; 
    }

    public static async getuser(token : string){
        try {
            const data = await jwt.verify(token , process.env.SECRET_JWT as string)
            return data 
        } catch (error) {
                return null ; 
        }

    }

    
}