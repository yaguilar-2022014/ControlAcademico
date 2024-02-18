import mongoose, { Schema, model } from "mongoose"

const courseSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    teacher:{
        type: Schema.ObjectId,
        ref: 'user',
        required: true
    }
})

export default model('course', courseSchema)
