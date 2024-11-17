import express from "express"
import cors from 'cors'
import router from "./auth"
import eventrouter from "./event/router"
import voterouter from "./vote"

export async function  server() {
    const app = express() 

    app.use(cors())
    app.use(express.json())
    app.use("/auth"  ,router )
    app.use("/api/event"  , eventrouter)  
    app.use("/api/vote"  ,voterouter )

    return app ; 

}

