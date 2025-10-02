import jwt from 'jsonwebtoken'

const isAuth = async (req, res, next) => {
    try {
        const token = req.cookies.token
        if (!token) return res.status(404).json({message : "token not found"})

        const decodedUser = await jwt.verify(token, process.env.JWT_SECRET)
        req.user_id = decodedUser._id  
        next()
    } catch (error) {
        res.status(401).json({message : `user not authenticated : ${error.message}`})
    }
}

export default isAuth