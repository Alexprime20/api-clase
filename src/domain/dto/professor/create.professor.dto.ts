export class CreateProfessorDto {
    constructor(
        public name:string,
        public email:string,
        public gender:string,
        public address:string,
        public profession:string,
    ){}

    static create ( object:{[Key:string]:any}): [string?, CreateProfessorDto?]{
        const {name,email, gender, address, profession}=object;
        if (!name) return ["name is required", undefined];
        if (!email) return ["email is required"];
        if (!gender) return ["gender is required"];
        if (!address) return ["address is required"];
        if (!profession) return ["profession is required"];
        
        return [undefined, new CreateProfessorDto(name, email, gender, address, profession)]


    }
        
}
