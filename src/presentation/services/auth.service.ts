import { error } from "console";
import { UserModel } from "../../data/mongodb/models/user.model";
import { UserEntity } from "../../domain/entities/user.entity";
import { UserRegisterDto } from "../../domain/dto/auth/register-user.dto";
import { UserMaper } from "../../domain/mapers/user.mapers";
import { UserLoginDto } from "../../domain/dto/auth/login-user.dto";
import { JwtAdapter } from "../../config/jwt.adapter";
import { CustomError } from '../../domain/errors/custom.error';




export class UserService{
   async register (userRegisterDto:UserRegisterDto): Promise <UserEntity> {
    
        const { email }= userRegisterDto;
       try{
            const exist = await UserModel.findOne({email});
            if (exist) throw CustomError.conflict("User not available!");
            
            const user = await UserModel.create( userRegisterDto )
            if( !user ) throw error('user not registrate!')
            
            await user.save();

            return UserMaper.fromEntity(user);
        } catch (error) {
            if( error instanceof CustomError ) throw error;

            throw CustomError.internalServer();
        }

    }
    async login(userLoginDto: UserLoginDto): Promise<{token:string, user:UserEntity}>{
        const {email, password} = userLoginDto 
        try {
            const user = await UserModel.findOne({ email });
            if( !user ) throw new Error('credencials not valid!');

            const token = await JwtAdapter.generateToken({ id: user.id});
            if( !token ) throw new Error('token not created!');
            
            return {
                token,
                user: UserMaper.fromEntity(user)
            }
        } catch (error) {
           throw error; 
        }
           
    }
 
}
 