export class UserLoginDto {
    constructor(
        public email:string,
        public password:string
    ) {}
    static login ( object:{[Key:string]:any}): [string?, UserLoginDto?]{
        const {email,password}=object;

            if (!email) return["email is required", undefined];
            if (!password) return ["password is required", undefined];
    
        return [undefined, new UserLoginDto(email, password)]
    }   
}