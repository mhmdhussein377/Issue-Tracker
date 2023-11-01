import mongoose  from "mongoose";

let isConnected = false

export const connectToDB = async () => {

    mongoose.set("strictQuery", true)

    if(!process.env.DATABASE_URL) return console.log("Missing MongoDB URL")

    if(!isConnected) {
        try {
            await mongoose.connect(process.env.DATABASE_URL)

            isConnected = true
            console.log("MongoDB Connected")
        } catch (error) {
            console.log(error)
        }
        return
    }

    console.log("MongoDB connected already established")
}