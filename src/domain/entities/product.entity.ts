export class ProductEntity{
    constructor(
        public id:string,
        public name:string,
        public description:string,
        public price:number,
        public category:string,
        public img:string,
    ){}    
}
