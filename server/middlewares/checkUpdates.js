import User from "../models/User.model.js"

const check_updates = async (req, res, next) => {
    console.log(req.body);
    const {_id, ...updates} = req.body
    const {name, user_name} = updates 
    if (name && name==="") return res.status(400).json({error : "name can not be an empty string"})
    if (user_name) {
        if (user_name==="") return res.status(400).json({error : "user-name can not be an empty string"})
        try {
            const user = await User.findOne({user_name : user_name})
            if (user) return res.status(400).json({message : `${user_name} not available`, user : user})
        } catch (error) {
            return res.status(500).json({error : error})
        }
    }
    next()
}

export default check_updates