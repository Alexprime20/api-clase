import mongoose from "mongoose"
export class Validators{
    static get email(){
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    }
    static get password(){
        return /^(?=.*\d)[a-zA-Z0-9!@#$%^&*?]+$/;
    }
    static validationMongoId(id:string){
        const validator=mongoose.Types.ObjectId.isValid(id)
        if(validator) return true
    }
}
