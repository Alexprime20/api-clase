import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],

    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
    category: {
        type: String,
    },
    img: {
        type: String,
    }
    
    
})

export const ProductModel = mongoose.model('Product', productSchema);