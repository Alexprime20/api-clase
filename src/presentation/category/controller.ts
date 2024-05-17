import { Request, Response } from "express";
import { CreateCategoryDto } from "../../domain/dto/category/create-category.dto";
import { CategoryService } from "../services/category.service";



export class CategoryController{
    constructor(private readonly categoryService:CategoryService,){}
    

    create = (req:Request, res:Response) => {
        const [error, CreateCategory] = CreateCategoryDto.create(req.body);
    if(error) return res.status(400);
    this.categoryService.create(CreateCategory!)
    .then(category => res.json(category))
    .catch (error => res.status(500).json(error))
    }
    update = (req:Request, res:Response) => {
        return res.json ({ message : "update Product"});
    }
    delete = (req:Request, res:Response) => {
        return res.json ({ message : "Delete Product"});
    }
    findAll = (req:Request, res:Response) => {
        return res.json ({ message : "Find All Product"});
    }

}