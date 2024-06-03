export class CreateProductDto {
    constructor(
        public name:string,
        public description:string,
        public price: number,
        public category: string,
        public img: string,
    ){}

    static create ( object:{[Key:string]:any}): [string?, CreateProductDto?]{
        const {name,description, price, category, img}=object;
        if (!name) return ["name is required", undefined];
        
        return [undefined, new CreateProductDto(name, description, price, category, img)]


    }
        
}

    