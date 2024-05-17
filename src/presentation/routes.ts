import { Router } from "express";
import { ProductRoutes } from "./product/routes";

export class AppRoute{

    static get route():Router{
        const routes= Router();
        routes.use(`api/product`, ProductRoutes.routes);

        return routes;
    }
}