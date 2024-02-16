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
        minLength: [5, 'Password must be 5 characters'],
        required: true
    },
    role: {
        type: String,
        uppercase: true,
        enum: ['STUDENT', 'TEACHER', 'USER'],
        required: true
    }
})

export default mongoose.model('user', userSchema)