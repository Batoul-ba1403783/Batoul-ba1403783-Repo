import mongoose from "mongoose";

const Product = mongoose.model("Product", new mongoose.Schema(
    {

    pid: {
        type: Number,
        unique: true,
        required: [true, "pid can not be empty"]
    },

    name: {
        type: String,
        required: [true, "product name can not be empty"]
    },

   description: {
            type: String,
            required: [true, "product description can not be empty"]
        },

    price: {
        type: Number,
        required: [true, "product price can not be empty"]
    }
}));

export default Product;
