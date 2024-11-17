import { prismaClient } from "../client";

export class EventService{


    public static async geOngoingEvents(){
        const events = await prismaClient.event.findMany({
            where : {
                Status : "Ongoing"
            },
            orderBy: {
                eventDate: 'asc' // Orders events by date in ascending order
            }
            
        })
        return events ; 
    }
    public static async getEvents(id : number){
        const event = await prismaClient.event.findUnique({
            where : {
                id : id 
            }
        })
        return event ; 
    }
}