import multer, { FileFilterCallback } from 'multer';
import { Request } from 'express';
import path from 'path';

// Configuración de almacenamiento
const storage = multer.diskStorage({
  destination: (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) => {
    cb(null, 'uploads/'); // Directorio donde se guardarán los archivos
  },
  filename: (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Nombre del archivo
  }
});

// Filtros de archivo, por ejemplo, para aceptar solo imágenes
const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
  const filetypes = /jpeg|jpg|png/;
  const mimetype = filetypes.test(file.mimetype);
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

  if (mimetype && extname) {
    return cb(null, true);
  }
  cb(new Error('Error: File upload only supports the following filetypes - ' + filetypes));
};

// Inicialización de multer
const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 1024 * 1024 * 5 } // Límite de 5MB para los archivos
});

export { upload };
