import User from "../models/User.model.js";

const getAuthUser = async (req, res) => {
    try {
        const user = await User.findById(req.user_id).select('-password')
        if(!user) return res.status(404).json({message : "User not found"})
        res.status(200).json({user : user})
    } catch (error) {
        res.status(500).json({message : "Internal server error"})
    }
}

export default getAuthUser