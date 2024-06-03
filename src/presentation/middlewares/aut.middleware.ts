import { NextFunction, Request, Response} from "express";
import { JwtAdapter } from "../../config/jwt.adapter";
import { UserModel } from "../../data/mongodb/models/user.model";

export class AutMiddleware {
    constructor(){}
 
   static async validateJWT(req:Request,res:Response,next:NextFunction){
        const authorization = req.headers.authorization; // Bearer ashfka.jshdkajshdak.sjhdakjsdh

        if(!authorization?.startsWith('Bearer ')) return res.status(400).json({message: 'Error'});    

        const token = authorization.split(' ').at(1) || '';
        if (!token) return res.status(400).json({message:'token not provided!'});

        const payload = await JwtAdapter.validateToken< {id: string} >( token );
        if(!payload) return res.status(400).json({message: 'token invalid!'});

        const user = await UserModel.findOne({ _id: payload.id })
        if(!user) return res.status(403).json({message: 'unauthorized!'})

        req.body.user = user;

        next();
    }

    

}