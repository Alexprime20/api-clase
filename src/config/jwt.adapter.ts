import jwt from 'jsonwebtoken';
import { envs } from './envs';
const JWT_SECRET = envs.JWT_SECRET;

export class JwtAdapter{

    static async generateToken( payload: Object, duration:string = '2h' ):Promise<string|null>{
        return new Promise( ( resolve ) => {
            jwt.sign( payload, JWT_SECRET, { expiresIn: duration }, ( error, token ) => {
                if( error ) return resolve( null );
                
                return resolve( token! );
            });
        });
    }

    static validateToken<T>( token: string ): Promise<T|null>{
        return new Promise((resolve)=>{
            jwt.verify( token, JWT_SECRET, (error, decoded) => {
                if( error ) return resolve( null );
                
                return resolve( decoded as T );
            });
        });
    }

    static async renewToken( token: string ): Promise<string|null>{
        const payload = await JwtAdapter.validateToken<{id:string}>( token );
        if( !payload ) return Promise.resolve( null );
        
        return JwtAdapter.generateToken( { id: payload.id } );
    }
}