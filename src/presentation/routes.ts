import { Router } from "express";
import { CategoryRoutes } from "./category/routes";
import { AuthRoutes } from "./auth/routes";
import { ProfessorRoutes } from './professor/routes';
import { UpdateFileRoutes } from './upload-file/routes';
import { ProductController } from './product/controller';

export class AppRoutes{

    static get routes():Router{
        const routes= Router();
        
        routes.use('/api/auth', AuthRoutes.routes);
    
        routes.use('/api/category', CategoryRoutes.routes);
        routes.use('/api/professor', ProfessorRoutes.routes);
        routes.use('/api/upload', UpdateFileRoutes.routes);


        return routes;
    }
}