export class CreateCategoryDto {
    constructor(
        public name:string,
        public description:string

    ){}

    static create ( object:{[Key:string]:any}): [string?, CreateCategoryDto?]{
        const {name,description}=object;
        if (!name) return ["name is required", undefined];
        
        return [undefined, new CreateCategoryDto(name, description)]


    }
        
}

    