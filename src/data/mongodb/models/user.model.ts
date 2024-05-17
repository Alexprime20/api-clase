import mongoose from 'mongoose';
const categorySchema = new mongoose.Schema({
    id: {
        type: String,
        required: [true, 'id is required'],
    },
    name: {
        type: String,
        required: [true, 'name is required'],
    },
    email: {
        type: String,
        required: [true, 'email is required'],
    },
    password: {
        type: String,
        required: [true, 'password is required'],
    },
    role: {
        type: String,
    },
    
})

export const UserModel = mongoose.model('User', categorySchema);