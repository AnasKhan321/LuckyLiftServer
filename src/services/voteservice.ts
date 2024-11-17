import { prismaClient } from "../client";
import { Vote } from "../interfaces";

export class VoteService{


    public static async createVote(data : Vote){
        const newvote = await prismaClient.vote.create({
            data : {
                event : {connect : {id :data.eventId}} , 
                user : {connect : {id :data.userid}} , 
                amount : data.amount , 
                predicted : data.predicted 
            }
        })

        const user = await prismaClient.user.findUnique({
            where : {
                id : data.userid
            }
        })
        if(user){
            const updatedamount = user.balance - data.amount

            const updateduser = await prismaClient.user.update({
                where : {
                    id : data.userid
                },
                data : {
                    balance : updatedamount
                }
            })
        }



        return newvote ; 

    }
}