import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        trim: true
    },
    threshold: {
        type: Number,
        default: 0
    },
    url: {
        type: String,
        required: true
    },
    shop: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Shop",
        required: true
    },
    shopifyCount: {
        type: Number,
        default: 0
    },
    wordPressCount: {
        type: Number,
        default: 0
    },
    magentoCount: {
        type: Number,
        default: 0
    }


}, { timestamps: true });

export default mongoose.model("Product", productSchema);