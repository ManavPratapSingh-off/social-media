import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    author : {type:mongoose.Schema.Types.ObjectId, ref:"user", required},
    media_type : {type:String, enum:["image", "video"], required},
    media_url : {type:String, required},
    caption : {type:String, default:""},
    likes : [{type:mongoose.Schema.Types.ObjectId, ref:"user"}],
    comments : [{
        user : {type:mongoose.Schema.Types.ObjectId, ref:"user", required},
        text : {type:String, required},
        created_at : {type:Date, default:Date.now()}
    }]
}, {timestamps : true})

const Post = mongoose.model("post", postSchema)

export default Post