import mongoose from 'mongoose';
const professorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],

    },
    email: {
        type: String,
        required: [true, 'name is required']
    },
    gender: {
        type: String,
        required: [true, 'name is required']
    },
    address: {
        type: String,
        required: [true, 'name is required']
    },
    profession: {
        type: String,
        required: [true, 'name is required']
    }
    
    
})

export const ProfessorModel = mongoose.model('Professor', professorSchema);