import { Router } from "express";
import { ProductController } from "./controller";

export class ProductRoutes{

    static get routes():Router{
        const routes=Router();
        const controller = new ProductController()
        routes.get (`/ `, controller.create);
        routes.put ('/' , controller.update);
        routes.delete ('/' , controller.delete);
        routes.post ('/' , controller.findAll);

        return routes;
    }
}