import mongoose from "mongoose"

const issueSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        maxLength: 255,
        required: true,
    },
    status: {
        type: String,
        enum: ["open", "in_progress", "closed"],
        default: "open"
    },
    assignedTo: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    }
})

const Issue = mongoose.model("Issue", issueSchema) 