import { CreateCategoryDto } from "../domain/dto/category/create-category.dto";
import { UpdateCategoryDto } from "../domain/dto/category/update-category.dto";
import { CategoryEntity } from "../domain/entities/category.entity";
import { CategoryModel } from "../data/mongodb/models/category.model";
import { CategoryMaper } from "../domain/mapers/category.mapers";
import { PaginationDto } from '../domain/dto/category/paginationdto';


export class CategoryService {

  async create(createCategoryDto: CreateCategoryDto): Promise<CategoryEntity> {
    const { name } = createCategoryDto;
    try {
      const exist = await CategoryModel.findOne({ name });
      if (exist) throw Error("error");

      const Category = await CategoryModel.create(createCategoryDto);
      if (!Category) throw Error("error");

      await Category.save();

      return CategoryMaper.fromEntity(Category);
    } catch (error) {
      throw error;
    }
  }

  async update(updateCategoryDto: UpdateCategoryDto, id: string): Promise<CategoryEntity> {
    try {
      const category = await CategoryModel.findByIdAndUpdate({
        id: updateCategoryDto,
        data: { ...updateCategoryDto }
      });
      if (!category) throw Error('Error')
      await category.save();
      return CategoryMaper.fromEntity(category);
    }
    catch (error) {
      throw error;
    }
  }
  async delete(id: string): Promise<CategoryEntity> {
    try {

      const category = await CategoryModel.findOneAndDelete({ id });
      if (!category) throw Error('Error')
      return CategoryMaper.fromEntity(category);
    } catch (error) {
      throw error
    }
  }
  async findAll(paginationDto: PaginationDto): Promise<CategoryEntity[]> {
    const { offset, limit } = paginationDto
    try {
      const categories = await CategoryModel.find(paginationDto)

      const MappedCategories = categories.map(CategoryMaper.fromEntity);

      return MappedCategories
    } catch (error) {
      throw error
    }
  }

  async findOne(id: string): Promise<CategoryEntity> {
    try {
      const category = await CategoryModel.findOne({ id });
      if (!category) throw Error('Error')
      return CategoryMaper.fromEntity(category);
    } catch (error) {
      throw error
    }
  }
}
