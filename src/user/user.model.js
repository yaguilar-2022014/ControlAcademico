import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        minLength: [6, 'Password must be 6 characters'],
        required: true
    },
    role: {
        type: String,
        uppercase: true,
        enum: ['STUDENT', 'TEACHER'],
        required: true
    }
})

export default mongoose.model('user', userSchema)