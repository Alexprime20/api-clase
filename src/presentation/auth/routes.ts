import { Router } from "express";
import { UserController } from "./controller";
import { UserService } from "../../services/auth.service";

export class ProductRoutes{

    static get routes():Router{
        const routes=Router();
        const categoryServices = new UserService();
        const controller = new UserController(categoryServices)
        routes.get (`/ `, controller.create);
        routes.put ('/' , controller.update);

        return routes;
    }
}

