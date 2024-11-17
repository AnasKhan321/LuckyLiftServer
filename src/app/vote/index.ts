import express from "express"
import { VoteService } from "../../services/voteservice"
import authorizationmiddleware, { CustomRequest } from "../../middlewares/middleware"
const voterouter = express.Router()

voterouter.post("/create"  , authorizationmiddleware ,async(req  : CustomRequest, res)=>{

    const newVoteobj = {
        eventId : req.body.eventid  , 
        amount : req.body.amount , 
        predicted : req.body.predicted,
        userid : req.user.id
        
    }
    


    const data = await VoteService.createVote(newVoteobj)

    res.status(201).json({message : "Created Successfully"})

})

export default voterouter