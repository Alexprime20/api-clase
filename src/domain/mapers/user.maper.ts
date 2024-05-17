import { UserEntity } from "../entities/user.entity";

export class UserMaper{
    static fromEntity(object: {[Key:string]: any}):UserEntity{
        const {id, name, email, password, role, img} = object;
        if(!name) throw Error('')
            return new UserEntity(id, name, password, email, role, img)
    }
}