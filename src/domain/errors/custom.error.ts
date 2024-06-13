export class CustomError extends Error  {


    constructor( public statusCode:number, public message:string){
        super( message );
    }


    static badRequest( message:string ){
        return new CustomError( 400, message );
    }

    static unauthorized( message:string ){
        return new CustomError( 401, message );
    }

    static forbidden( message:string ){
        return new CustomError( 403, message );
    }

    static notFound( message:string ){
        return new CustomError( 404, message );
    }

    static conflict( message:string ){
        return new CustomError( 409, message );
    }

    static internalServer( message:string = "internal Server Error" ){
        return new CustomError( 500, message );
    }

    static notImplemented( message:string = "Method not Implemented!" ){
        return new CustomError( 501, message );
    }
}