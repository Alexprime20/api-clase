import  express from "express";
import { AppRoute } from "./routes";
import {envs} from '../config/envs';

export class Server{
    private app = express();

    start(){

        this.app.use(AppRoute.route);
        
        this.app.listen(envs.PORT, () => {
            console.log(`SERVER RUNNING ON PORT ${envs.PORT}`);       
        })

    }
}

