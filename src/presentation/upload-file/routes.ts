import { Router } from 'express';
import { UploadFileController } from '../upload-file/controller';
import { upload } from '../middlewares/UploadFileMiddleware'; // Ajusta la ruta según sea necesario

export class UpdateFileRoutes {
  static get routes(): Router {
    const routes = Router();
    const controller = new UploadFileController();

    routes.post("/single/:type", upload.single('file'), controller.uploadSingle);

    return routes;
  }
}
