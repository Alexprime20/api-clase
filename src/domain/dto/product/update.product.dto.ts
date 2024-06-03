export class UpdateProductDto{
    constructor(
        public name?: string,
        public description?: string,
        public price?: number,
        public category?: string,
        public img?: string,
    ){}

   
    static update( object: {[key:string]:any} ): [string?, UpdateProductDto?]{
        const { name, description, price, category, img } = object;
        return [undefined, new UpdateProductDto(name, description, price, category, img)];
    }
}