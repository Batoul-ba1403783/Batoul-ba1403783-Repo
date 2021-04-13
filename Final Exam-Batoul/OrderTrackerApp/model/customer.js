//Todo 1.1 (7): Create the customer model : make sure you read the exam PDF file to understand the requirements

import mongoose from "mongoose";

const Schema = mongoose.Schema
//
// const options = {
//     toJSON :{
//         virtuals : true
//     }
// }

const customerSchema = new Schema({
    id:{
        type: Schema.Types.ObjectId,
        required: [true, 'ID is a required field']
    },
    name:{
        type: String,
        required: [true, 'Name is a required field']
    },
    gender:{
        type: String,
        enum: ['Female', 'Male'],
        required: [true, 'Gender is a required field']
    }
})
//
// customerSchema.virtual('id').get(function () {
//     return this.id
// })
//
// customerSchema.virtual('name').get(function () {
//     return this.name
// })

export default mongoose.model('Customer', customerSchema)