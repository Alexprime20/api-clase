export class UserRegisterDto {
    constructor(
        public name: string,
        public email: string,
        public password: string
    ) {}

    static register(object: { [key: string]: any }): [string?, UserRegisterDto?] {
        const { name, email, password } = object;
        if (!name) return ["Name is required", undefined];
        if (!email) return ["Email is required", undefined];
        if (!password) return ["Password is required", undefined];

        return [undefined, new UserRegisterDto(name, email, password)];
    }
}
