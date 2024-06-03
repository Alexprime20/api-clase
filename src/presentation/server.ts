import  express, { urlencoded } from "express";
import { AppRoutes } from "./routes";
import {envs} from '../config/envs';

export class Server{
    private app = express();

    start(){
        this.app.use( express.json() );
        this.app.use( express.urlencoded({extended:true}) );
        
        this.app.use(AppRoutes.routes);
        
        this.app.listen(envs.PORT, () => {
            console.log(`SERVER RUNNING ON PORT ${envs.PORT}`);       
        })

    }
}

