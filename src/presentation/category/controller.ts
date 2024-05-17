import { Request, Response } from "express";
import { CreateCategoryDto } from "../../domain/dto/category/create-category.dto";
import { UpdateCategoryDto } from "../../domain/dto/category/update-category.dto";
import { CategoryService } from "../services/category.service";
import { Validators } from "../../config/validator";
import { PaginationDto } from "../../domain/dto/category/paginationdto";


export class CategoryController {
  constructor(private readonly categoryService: CategoryService){}

  create = (req: Request, res: Response) => {
    const [error, createCategory] = CreateCategoryDto.create(req.body);
    if (error) return res.status(400).json({ error });
    this.categoryService.create(createCategory!)
      .then(category => res.json(category))
      .catch(error => res.status(500).json(error));
  };

    update = (req: Request, res: Response) => {
      const id = req.params.id
      if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
      const [error, updateCategoryDto] = UpdateCategoryDto.update(req.body)
      this.categoryService.update(updateCategoryDto!, id!)
      .then(category => res.json(category))
      .catch(error => res.status(500).json(error))

    }

    delete = (req: Request, res: Response) => {
      const id = req.params.id
      if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
      
        this.categoryService.delete(id!)
        .then(category => res.json(category))
        .catch(error => res.status(500).json(error))
      }

    findAll = (req: Request, res: Response) => {
      const [, paginationDto] = PaginationDto.create( req.query )
      
      this.categoryService.findAll(paginationDto!)
      .then(category => res.json(category))
      .catch(error => res.status(500).json(error))
    }


    findOne = (req: Request, res: Response) => {
      const id = req.params.id
      if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
      
        this.categoryService.findOne(id!)
        .then(category => res.json(category))
        .catch(error => res.status(500).json(error))
    }
  }
