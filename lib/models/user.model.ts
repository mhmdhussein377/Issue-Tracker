import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        maxLength: 40,
        required: true,
    },
    username: {
        type: String,
        maxLength: 30,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        minLength: 8,
        required: true,
    },
})

const User = mongoose.model("User", userSchema)

export default User