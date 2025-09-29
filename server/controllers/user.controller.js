import User from "../models/User.model.js";

 export const getAuthUser = async (req, res) => {
    try {
        const user = await User.findById(req.user_id).select('-password')
        if(!user) return res.status(404).json({message : "User not found"})
        res.status(200).json({user : user})
    } catch (error) {
        res.status(500).json({message : "Internal server error"})
    }
}

export const get_param_user = async (req, res) => {
    try {
        const {user_name} = req.params 
        const response = await User.findOne({user_name}).select("-password")
        if (!response) res.status(404).json({message : "user not found!"})
        res.status(200).json(response)
    } catch (error) {
        throw new Error(error)
    }
}

export const patch_profile_details = async (req, res) => {
    try {
        const {_id} = req.body
        const response = await User.findByIdAndUpdate(_id, req.body, {new:true})
        if (!response) return res.status(404).json({message : `user-id : ${_id} not found!`})
        res.status(201).json(response)
    } catch (error) {
        res.status(500).json({error : error})
    }
}