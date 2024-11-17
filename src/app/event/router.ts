import express from "express"
import { EventService } from "../../services/eventservice"
import {redisclient}  from "../../client/index"


const eventrouter = express.Router() 



eventrouter.get("/getevents"  , async(req,res )=>{
    const redisdata = await redisclient.get("ongoingevents")
    if(redisdata){
        res.json(JSON.parse(redisdata))
        return 
    }else{
        const data =await  EventService.geOngoingEvents() 
        await redisclient.setex("ongoingevents"  ,60*60*2, JSON.stringify(data))
        res.json(data)
    }

})

eventrouter.get("/getevent/:id"  , async(req,res)=>{
    const id = req.params.id
    const redisdata = await redisclient.get(`ongoingevents:${id}`)
    if(redisdata){
        res.json(JSON.parse(redisdata))
        return 
    }else{
        const data = await EventService.getEvents(parseInt(id))
        await redisclient.setex(`ongoingevents:${id}`  ,60*60, JSON.stringify(data))

        res.json(data)
    }

})

export default eventrouter ; 