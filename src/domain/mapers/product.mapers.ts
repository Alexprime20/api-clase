import { ProductEntity } from "../entities/product.entity.ts";

export class ProductMaper{
    static fromEntity(object: {[Key:string]: any}):ProductEntity{
        const {id, name, description, price, category, img} = object;
        if(!name) throw Error('')
            return new ProductEntity( id, name, description, price, category, img)
    }
}