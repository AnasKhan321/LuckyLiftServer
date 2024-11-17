import {Predicted }  from "@prisma/client"

export interface User {
    name : string  , 
    email : string , 
    picture : string , 

}

export interface Vote{
    eventId:  number , 
    userid :   number , 
    amount   : number ,
    predicted :Predicted

}


export interface Decodeduser{
    iat : number , 
    id : number , 
    email : string
}