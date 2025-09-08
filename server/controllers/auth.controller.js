import {gentoken} from "../config/token.js";
import User from "../models/User.model.js";
import bcrypt from "bcryptjs"

export const sign_up = async (req, res) => {
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
        
        const token = await gentoken(new_user._id)

        res.cookie("token", token, {
            httpOnly : true,
            sameSite : true,
            maxAge : 30*24*60*60*1000
        })
    
        res.status(201).json({message : "user created successfully", user : new_user})
    } catch (error) {
        res.status(500).json({message : "Internal server error"})
    }
}

export const sign_in = async (req, res) => {
    const {user_name, password} = req.body
    try {
        if (!user_name || !password) return res.status(400).json({message : "All fields are required!"})

        //find user name
        const existing_user = await User.findOne({user_name})
        if (!existing_user) return res.status(404).json({message : "We could not find the user! Try signing up."})
        
        //compare password
        const pass_matches = await bcrypt.compare(password, existing_user.password)
        if (!pass_matches) return res.status(400).json({message : "Invalid credentials!"})

        const token = await gentoken(existing_user._id)
        
        res.cookie("token", token, {
            httpOnly : true,
            sameSite : true,
            maxAge : 30*24*60*60*1000
        })

        res.status(200).json({message : "Signed in successfully", user : existing_user})  
    } catch (error) {
        res.status(500).json({message : `Internal server error : ${error.message}`})
    }
}