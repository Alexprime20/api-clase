export class UserRegisterDto {
    static create(body: any): [any, any] {
        throw new Error("Method not implemented.");
    }
    constructor(
        public name:string,
        public email:string,
        public password:string
        
    ) {}

    static Register ( object:{[Key:string]:any}): [string?, UserRegisterDto?]{
        const {name, email,password}=object;
        if (!name) return["name is required", undefined];
        if (!email) return["email is required", undefined];
        if (!password) return ["password is required", undefined];

        return [undefined, new UserRegisterDto(name, password, email)]
    }
        
}