import { Router } from "express";
import { CategoryController } from "./controller";
import { CategoryService } from "../services/category.service";
import { AutMiddleware } from "../middlewares/aut.middleware";


export class CategoryRoutes{

    static get routes():Router{
        const routes=Router();
        const categoryServices = new CategoryService();
        const controller = new CategoryController(categoryServices)

        routes.get ('/', controller.create);
        routes.put ('/' , controller.update);
        routes.delete ('/' , controller.delete);
        routes.post ('/' , [
        AutMiddleware.validateJWT
        ], controller.create);

        return routes;
    }
}

