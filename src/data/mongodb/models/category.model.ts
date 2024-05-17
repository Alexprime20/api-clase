import mongoose from 'mongoose';
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],

    },
    description: {
        type: String,
    },
    
})

export const CategoryModel = mongoose.model('Category', categorySchema);