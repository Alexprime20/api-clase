import { Request, Response } from "express";

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

}