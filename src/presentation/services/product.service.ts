import { CreateProductDto } from "../../domain/dto/product/create.product.dto";
import { UpdateProductDto } from "../../domain/dto/product/update.product.dto";
import { ProductEntity } from "../../domain/entities/product.entity";
import { ProductModel } from "../../data/mongodb/models/product.model";
import { ProductMaper } from "../../domain/mapers/product.mapers";
import { PaginationDto } from '../../domain/dto/category/paginationdto';


export class ProductService {

  async create(createProductDto: CreateProductDto): Promise<ProductEntity> {
    const { name } = createProductDto;
    try {
      const exist = await ProductModel.findOne({ name });
      if (exist) throw Error("error");

      const Product = await ProductModel.create(createProductDto);
      if (!Product) throw Error("error");

      await Product.save();

      return ProductMaper.fromEntity(Product);
    } catch (error) {
      throw error;
    }
  }

  async update(updateProductDto: UpdateProductDto, id: string): Promise<ProductEntity> {
    try {
      const product = await ProductModel.findByIdAndUpdate({
        id: updateProductDto,
        data: { ...updateProductDto }
      });
      if (!product) throw Error('Error')
      await product.save();
      return ProductMaper.fromEntity(product);
    }
    catch (error) {
      throw error;
    }
  }
  async delete(id: string): Promise<ProductEntity> {
    try {

      const product = await ProductModel.findOneAndDelete({ id });
      if (!product) throw Error('Error')
      return ProductMaper.fromEntity(product);
    } catch (error) {
      throw error
    }
  }
  async findAll(paginationDto: PaginationDto): Promise<ProductEntity[]> {
    const { offset, limit } = paginationDto
    try {
      const categories = await ProductModel.find(paginationDto)

      const MappedCategories = categories.map(ProductMaper.fromEntity);

      return MappedCategories
    } catch (error) {
      throw error
    }
  }

  async findOne(id: string): Promise<ProductEntity> {
    try {
      const product = await ProductModel.findOne({ id });
      if (!product) throw Error('Error')
      return ProductMaper.fromEntity(product);
    } catch (error) {
      throw error
    }
  }
}
