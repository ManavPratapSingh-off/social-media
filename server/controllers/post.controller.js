import upload_file from "../config/cloud.js";
import Post from "../models/Post.model.js";
import User from "../models/User.model.js";

export const upload_post = async (req, res) => {
    try {
        const {media_type, caption} = req.body
        let media_url;
        if(req.file) media_url = await upload_file(req.file)
        else return res.status(404).json({ message: "No Media File Detected" })
        const post = await Post.create({author : req.user_id, media_type, media_url, caption})

        const user = await User.findById(post.author).populate("posts")
        user.posts.push(post._id)
        await user.save()
        
        const populatedPost = await Post.findById(post._id).populate("author", "user_name profile_img")

        return res.status(201).json({message : "post created successfully!", populatedPost})
    } catch (error) {
        console.dir(error, { depth: null, colors: true })
        res.status(500).send({error : error})
    }
}

export const get_all_posts = async (req, res) => {
    const posts = await Post.find({}).sort({updatedAt : -1})
    if (!posts) return res.Status(404).send({message : "No posts yet"})
    res.send(posts)
}