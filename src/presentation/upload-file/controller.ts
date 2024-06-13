import { Request, Response } from 'express';

export class UploadFileController {
  uploadSingle = (req: Request, res: Response) => {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
    
    return res.json({ message: 'File uploaded successfully', file: req.file });
  };
}
