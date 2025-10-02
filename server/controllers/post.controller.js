import upload_file from "../config/cloud.js";
import Post from "../models/Post.model.js";

export const upload_post = async (req, res) => {
    try {
        const {media_type, caption} = req.body
        let media_url;
        if(req.file) media_url = await upload_file(req.file)
        else return res.status(404).json({ message: "No Media File Detected" })
        const post = await Post.create({author : req.user_id, media_type, media_url, caption})
        return res.status(201).json({message : "post created successfully!", post})
    } catch (error) {
        console.error(`Cannot create Post , ${error}`)
    }
}