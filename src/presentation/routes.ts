import { Router } from "express";
import { CategoryRoutes } from "./category/routes";
import { AuthRoutes } from "./auth/routes";
import { ProfessorRoutes } from './professor/routes';

export class AppRoutes{

    static get routes():Router{
        const routes= Router();
        
        routes.use('/api/auth', AuthRoutes.routes);
    
        routes.use('/api/category', CategoryRoutes.routes);
        routes.use('/api/professor', ProfessorRoutes.routes);


        return routes;
    }
}