import { error } from "console";
import { UserModel } from "../../src/data/mongodb/models/user.model";
import { UserEntity } from "../../src/domain/entities/user.entity";
import { UserRegisterDto } from "../../src/domain/dto/auth/register-user.dto";
import { UserMaper } from "../../src/domain/mapers/user.maper";




export class UserService{
   async create (userRegisterDto:UserRegisterDto): Promise <UserEntity> {
    
        const {name}= UserRegisterDto;
       try{
            const exist= await UserModel.findOne({name});
            if (exist) throw error ('')
            const User = await UserModel.create( UserRegisterDto )
            if(!User) throw error('')
                await User.save();
        return UserMaper.fromEntity(User);
        } catch (error) {
            throw error
        }

    }
    update(){}
    delete(){}
    findOne(){}
    findAll(){}
}