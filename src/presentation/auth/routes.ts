import { Router } from "express";
import { UserController } from "./controller";
import { UserService } from "../services/auth.service";

export class AuthRoutes{

    static get routes():Router{
        const routes=Router();
        const userServices = new UserService();
        const controller = new UserController(userServices)
        
        routes.post ('/register', controller.register);
        routes.post ('/login' , controller.login);

        return routes;
    }
}

