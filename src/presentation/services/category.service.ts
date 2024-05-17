import { error } from "console";
import { CategoryModel } from "../../data/mongodb/models/category.model";
import { CategoryEntity } from "../../domain/entities/category.entity";
import { CreateCategoryDto } from "../../domain/entities/dto/category/create-category.dto";
import { categoryMaper } from "../../domain/mapers/category.maper";

export class CategoryService{
   async create (createCategoryDto:CreateCategoryDto): Promise <CategoryEntity> {
    
        const {name}= CreateCategoryDto;
       try{
            const exist= await CategoryModel.findOne({name});
            if (exist) throw error ('')
            const Category = await CategoryModel.create( CreateCategoryDto )
            if(!Category) throw error('')
                await Category.save();
        return categoryMaper.fromEntity(Category);
        } catch (error) {
            throw error
        }

    }
    update(){}
    delete(){}
    findOne(){}
    findAll(){}
}