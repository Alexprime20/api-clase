export class PaginationDto{
    
    constructor(
        public offset: number,
        public limit: number,
        public pages: number,
        public total: number,
        public category?: string | string[]
    ){}

    static create(object:{[key:string]:any}): [string?, PaginationDto?]{
        const { offset = 0, limit = 10, pages, total, category } = object;

        if( isNaN(+offset) ) return ['Offset must be a number', undefined];
        if( isNaN(+limit) ) return ['Limit must be a number', undefined];

        if( +offset < 0 ) return ['Offset must be a positive number', undefined];
        if( +limit < 1 ) return ['Limit must be a positive number', undefined];
        if(!pages) return ['Pages is required', undefined]
        if(!total) return ['total is required', undefined]

        return [undefined, new PaginationDto(+offset, +limit, pages, total, category)];
    }
}