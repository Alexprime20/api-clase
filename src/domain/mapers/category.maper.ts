import { CategoryEntity } from "../entities/category.entity";

export class categoryMaper{
    static fromEntity(object: {[Key:string]: any}):CategoryEntity{
        const {id, name, description} = object;
        if(!name) throw Error('')
            return new CategoryEntity( id, name, description)
    }
}