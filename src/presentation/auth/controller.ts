import { Request, Response } from "express";
import { UserRegisterDto } from "../../domain/dto/auth/register-user.dto";
import { UserService } from "../services/auth.service";
import { UserLoginDto } from "../../domain/dto/auth/login-user.dto";



export class UserController {
    constructor(private readonly userService: UserService,) { }

    register = (req: Request, res: Response) => {
        const [error, userRegisterDto] = UserRegisterDto.register(req.body);
        if (error) return res.status(400);

        this.userService.register(userRegisterDto!)
            .then(user => res.json(user))
            .catch(error => res.status(500).json(error))
    }
    login = (req: Request, res: Response) => {
        const [error, userLoginDto] = UserLoginDto.login(req.body);
        if (error) return res.status(400);

        this.userService.login(userLoginDto!)
            .then(register => res.json(register))
            .catch(error => res.status(500).json(error))
    }

}