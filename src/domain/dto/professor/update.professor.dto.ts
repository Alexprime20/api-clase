export class UpdateProfessorDto{
    constructor(
        public name?: string,
        public email?: string,
        public gender?: string,
        public address?: string,
        public profession?: string,
    ){}

   
    static update( object: {[key:string]:any} ): [string?, UpdateProfessorDto?]{
        const { name, email, gender, address, profession } = object;
        return [undefined, new UpdateProfessorDto(name, email, gender, address, profession)];
    }
}