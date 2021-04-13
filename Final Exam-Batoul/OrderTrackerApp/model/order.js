//Todo : 1.1 (8). Create the order model : make sure you read the exam PDF file to understand the requirements

import mongoose from "mongoose";
const Schema = mongoose.Schema

const orderSchema = new Schema({
    id:{
        type: Schema.Types.ObjectId,
        required: [true, 'ID is a required field']
    },
    customerId:{
        type: Schema.Types.ObjectId,
        required: [true, 'Customer ID is a required field']
    },
    orderDate:{
        type: Date,
        required: [true, 'Order date is a required field']
    },
    product:{
        type: String,
        enum: ['iPhone', 'iPod', 'MacBook', 'Watch', 'TV'],
        required: [true, 'product is a required field']
    },
    totalPrice:{
        type: Number,
        min : [0, 'Price should be greater than 0'],
        required: [true, 'Total price is a required field']
    }
})

export default mongoose.model('Order', orderSchema)