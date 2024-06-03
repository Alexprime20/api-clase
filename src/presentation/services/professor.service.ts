import { CreateProfessorDto } from "../../domain/dto/professor/create.professor.dto";
import { UpdateProfessorDto } from "../../domain/dto/professor/update.professor.dto";
import { ProfessorEntity } from "../../domain/entities/professor.entity";
import { ProfessorModel } from "../../data/mongodb/models/professor.model";
import { ProfessorMaper } from "../../domain/mapers/professor.mapers";
import { PaginationDto } from '../../domain/dto/category/paginationdto';


export class ProfessorService {

  async create(createProfessorDto: CreateProfessorDto): Promise<ProfessorEntity> {
    try {
      const exist = await ProfessorModel.findOne({ email: createProfessorDto.email });
      if (exist) throw Error("error");

      const Professor = await ProfessorModel.create( createProfessorDto );
      if (!Professor) throw Error("error");

      await Professor.save();

      return ProfessorMaper.fromEntity(Professor);
    } catch (error) {
      throw error;
    }
  }

  async update(updateProfessorDto: UpdateProfessorDto, id: string): Promise<ProfessorEntity> {
    try {
      const professor = await ProfessorModel.findByIdAndUpdate({
        id: updateProfessorDto,
        data: { ...updateProfessorDto }
      });
      if (!professor) throw Error('Error')
      await professor.save();
      return ProfessorMaper.fromEntity(professor);
    }
    catch (error) {
      throw error;
    }
  }
  async delete(id: string): Promise<ProfessorEntity> {
    try {

      const professor = await ProfessorModel.findOneAndDelete({ id });
      if (!professor) throw Error('Error')
      return ProfessorMaper.fromEntity(professor);
    } catch (error) {
      throw error
    }
  }
  async findAll(paginationDto: PaginationDto): Promise<ProfessorEntity[]> {
    const { offset, limit } = paginationDto
    try {
      const categories = await ProfessorModel.find(paginationDto)

      const MappedCategories = categories.map(ProfessorMaper.fromEntity);

      return MappedCategories
    } catch (error) {
      throw error
    }
  }

  async findOne(id: string): Promise<ProfessorEntity> {
    try {
      const professor = await ProfessorModel.findOne({ id });
      if (!professor) throw Error('Error')
      return ProfessorMaper.fromEntity(professor);
    } catch (error) {
      throw error
    }
  }
}
