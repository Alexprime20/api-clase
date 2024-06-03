/*import { Router } from "express";
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
} */

import { Router } from "express";
import { ProductController } from "./controller";
import { ProductService } from "../services/product.service";
import { AutMiddleware } from "../middlewares/aut.middleware";


export class ProductRoutes{

    static get routes():Router{
        const routes=Router();
        const productServices = new ProductService();
        const controller = new ProductController(productServices)

        routes.get ('/', controller.create);
        routes.put ('/' , controller.update);
        routes.delete ('/' , controller.delete);
        routes.post ('/' , [
        AutMiddleware.validateJWT
        ], controller.create);

        return routes;
    }
}
