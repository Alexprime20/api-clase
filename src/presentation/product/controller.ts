/*import { Request, Response } from "express";

export class ProductController{
    
    create = (req:Request, res:Response) => {
        return res.json ({ message : "Product Create" });
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

}*/

import { Request, Response } from "express";
import { CreateProductDto } from "../../domain/dto/product/create.product.dto";
import { UpdateProductDto } from "../../domain/dto/product/update.product.dto";
import { ProductService } from "../services/product.service.ts";
import { Validators } from "../../config/validator";
import { PaginationDto } from "../../domain/dto/category/paginationdto";


export class ProductController {
  constructor(private readonly productService: ProductService){}

  create = (req: Request, res: Response) => {
    const [error, createProduct] = CreateProductDto.create(req.body);
    if (error) return res.status(400).json({ error });
    this.productService.create(createProduct!)
      .then(product => res.json(product))
      .catch(error => res.status(500).json(error));
  };

    update = (req: Request, res: Response) => {
      const id = req.params.id
      if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
      const [error, updateProductDto] = UpdateProductDto.update(req.body)
      if( error ) return res.status(400).json({error});
      
      this.productService.update(updateProductDto!, id!)
      .then(product => res.json(product))
      .catch(error => res.status(500).json(error))

    }

    delete = (req: Request, res: Response) => {
      const id = req.params.id
      if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
      
        this.productService.delete(id!)
        .then(product => res.json(product))
        .catch(error => res.status(500).json(error))
      }

    findAll = (req: Request, res: Response) => {
      const [error, paginationDto] = PaginationDto.create( req.query )
      if( error ) return res.status(400).json({error});
      this.productService.findAll(paginationDto!)
      .then(product => res.json(product))
      .catch(error => res.status(500).json(error))
    }


    findOne = (req: Request, res: Response) => {
      const id = req.params.id
      if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
      
        this.productService.findOne(id!)
        .then(product => res.json(product))
        .catch(error => res.status(500).json(error))
    }
  }
