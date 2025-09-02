import User from "../models/User.model.js";
import bcrypt from "bcryptjs"

const sign_up = async (req, res) => {
    const { name, email, user_name, password } = req.body
    try {
        if (!name || !email || !user_name || !password) return res.status(400).json({message : "All fields are required!"})
        const existing_user = await User.findOne({email})
        if (existing_user) return res.status(400).json({message : "User already exists!"})          
        
        const existing_user_name = await User.findOne({user_name})
        if (existing_user_name) return res.status(400).json({message : "Username already taken!"})

        if (password.length < 6) return res.status(400).json({message : "Password must be at least 6 characters long!"})
        
        const salt = await bcrypt.genSalt(10)
        const hashed_passwd = await bcrypt.hash(password, salt)

        const new_user = await User.create({name, email, user_name, password : hashed_passwd})
        res.status(201).json({message : "user created successfully", user : new_user})
    } catch (error) {
        res.status(500).json({message : "Internal server error"})
    }
}

export default sign_up