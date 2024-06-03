/*import { Router } from "express";
import { ProfessorController } from "./controller";

export class ProfessorRoutes{

    static get routes():Router{
        const routes=Router();
        const controller = new ProfessorController()
        routes.get (`/ `, controller.create);
        routes.put ('/' , controller.update);
        routes.delete ('/' , controller.delete);
        routes.post ('/' , controller.findAll);

        return routes;
    }
} */

import { Router } from "express";
import { ProfessorController } from "./controller";
import { ProfessorService } from "../services/professor.service";
import { AutMiddleware } from "../middlewares/aut.middleware";


export class ProfessorRoutes{

    static get routes():Router{
        const routes=Router();
        const professorServices = new ProfessorService();
        const controller = new ProfessorController(professorServices)

        routes.post ('/', controller.create);
        routes.get ('/', controller.create);
        routes.get ('/:id', controller.create);
        routes.put ('/:id' , controller.update);
        routes.delete ('/:id' , controller.delete);

        return routes;
    }
}
