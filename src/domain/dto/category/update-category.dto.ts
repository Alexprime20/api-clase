export class UpdateCategoryDto{
    constructor(
        public name?: string,
        public description?: string,
    ){}

   
    static update( object: {[key:string]:any} ): [string?, UpdateCategoryDto?]{
        const { name, description } = object;
        return [undefined, new UpdateCategoryDto(name, description)];
    }
}