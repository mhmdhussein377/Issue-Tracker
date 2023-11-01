import {createError} from "@/utils/error"
import User from "../models/user.model"
import {connectToDB} from "../mongoose"
import bcrypt from "bcrypt"

export const Register = async({name, email, username, password} : {name: string, email: string, username: string, password: string}) => {
    try {
        connectToDB()

        const usernameExists = await User.findOne({email})
        if (usernameExists) {
            return createError(400, "Invalid username!")
        }

        const existingUser = await User.findOne({email});
        if (existingUser) 
            return createError(400, "User already exists! Login Instead");
        
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const user = new User({name, username, email, password: hashedPassword});
        await user.save();

        return user
    } catch (error) {
        console.error("Error creating user: ", error)
        throw error
    }
}