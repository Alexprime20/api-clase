/*import { Request, Response } from "express";

export class ProfessorController{
    
    create = (req:Request, res:Response) => {
        return res.json ({ message : "Professor Create" });
    }
    update = (req:Request, res:Response) => {
        return res.json ({ message : "update Professor"});
    }
    delete = (req:Request, res:Response) => {
        return res.json ({ message : "Delete Professor"});
    }
    findAll = (req:Request, res:Response) => {
        return res.json ({ message : "Find All Professor"});
    }

}*/

import { Request, Response } from "express";
import { CreateProfessorDto } from "../../domain/dto/professor/create.professor.dto";
import { UpdateProfessorDto } from "../../domain/dto/professor/update.professor.dto";
import { ProfessorService } from "../services/professor.service";
import { Validators } from "../../config/validator";
import { PaginationDto } from "../../domain/dto/category/paginationdto";


export class ProfessorController {
  constructor(private readonly professorService: ProfessorService){}

  create = (req: Request, res: Response) => {
    const [error, createProfessor] = CreateProfessorDto.create(req.body);
    if (error) return res.status(400).json({ error });
    this.professorService.create(createProfessor!)
      .then(professor => res.json(professor))
      .catch(error => res.status(500).json(error));
  };

    update = (req: Request, res: Response) => {
      const id = req.params.id
      if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
      const [error, updateProfessorDto] = UpdateProfessorDto.update(req.body)
      if( error ) return res.status(400).json({error});
      
      this.professorService.update(updateProfessorDto!, id!)
      .then(professor => res.json(professor))
      .catch(error => res.status(500).json(error))

    }

    delete = (req: Request, res: Response) => {
      const id = req.params.id
      if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
      
        this.professorService.delete(id!)
        .then(professor => res.json(professor))
        .catch(error => res.status(500).json(error))
      }

    findAll = (req: Request, res: Response) => {
      const [error, paginationDto] = PaginationDto.create( req.query )
      if( error ) return res.status(400).json({error});
      this.professorService.findAll(paginationDto!)
      .then(professor => res.json(professor))
      .catch(error => res.status(500).json(error))
    }


    findOne = (req: Request, res: Response) => {
      const id = req.params.id
      if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
      
        this.professorService.findOne(id!)
        .then(professor => res.json(professor))
        .catch(error => res.status(500).json(error))
    }
  }
