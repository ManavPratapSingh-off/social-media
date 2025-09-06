import jwt from 'jsonwebtoken'

export const gentoken = async (_id) => {
    try {
        const token = await jwt.sign({_id}, process.env.JWT_SECRET, {expiresIn : '30d'})
        return token
    } catch (error) {
        throw new Error("Token generation failed")  
    }
}