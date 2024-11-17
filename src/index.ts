

import { server } from "./app";
import * as dotenv from 'dotenv';

dotenv.config();


async function  init() {
    const app = await  server()

    app.listen(8000 , ()=>{
        console.log(`Server listening on PORT : 8000`)
    })
}

init()  ; 