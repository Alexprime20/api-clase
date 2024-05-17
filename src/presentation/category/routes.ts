import { Router } from "express";
import { CategoryController } from "./controller";
import { CategoryService } from "../services/category.service";

export class ProductRoutes{

    static get routes():Router{
        const routes=Router();
        const categoryServices = new CategoryService();
        const controller = new CategoryController(categoryServices)
        routes.get (`/ `, controller.create);
        routes.put ('/' , controller.update);
        routes.delete ('/' , controller.delete);
        routes.post ('/' , controller.findAll);

        return routes;
    }
}

