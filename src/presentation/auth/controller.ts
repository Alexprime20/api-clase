import { Request, Response } from "express";
import { UserRegisterDto } from "../../domain/dto/auth/register-user.dto";
import { UserService } from "../../services/auth.service";
import { UserLoginDto } from "../../domain/dto/auth/login-user.dto";



export class UserController{
    UserService: any;
    constructor(private readonly userService:UserService,){}
    

    create = (req:Request, res:Response) => {
        const [error, userRegisterDto] = UserRegisterDto.Register(req.body);
    if(error) return res.status(400);
    this.UserService.Register(userRegisterDto!)
    .then(register => res.json(register))
    .catch (error => res.status(500).json(error))
    }
    update = (req:Request, res:Response) => {
        const [error, userLoginDto] = UserLoginDto.login(req.body);
        if(error) return res.status(400);

        this.UserService.login(userLoginDto!)
        .then(register => res.json(register))
        .catch(error => res.status(500).json(error))
    }

}