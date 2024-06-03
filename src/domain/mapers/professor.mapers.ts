import { ProfessorEntity } from "../entities/professor.entity";

export class ProfessorMaper{
    static fromEntity(object: {[Key:string]: any}):ProfessorEntity{
        const {id, _id, name, email, gender, address, profession} = object;
        if(!name) throw Error('')
        return new ProfessorEntity(id || _id, name, email, gender, address, profession)
    }
}