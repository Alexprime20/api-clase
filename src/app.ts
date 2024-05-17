import { mongodb } from "../src/data/mongodb/database";
import { Server } from "./presentation/server"; 

(() =>{
    main();
})();

async function main(){
    //levantar base de datos
    await mongodb.connection();

    //levantar servidor
    const server = new Server();
    server.start();
}