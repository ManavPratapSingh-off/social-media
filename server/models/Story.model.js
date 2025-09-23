import mongoose from "mongoose";

const storySchema = new mongoose.Schema({
    author : {type:mongoose.Schema.Types.ObjectId, ref:"user", required},
    media_type : {type:String, enum:["image", "video"], required},
    media_url : {type:String, required},
    viewers : [{type:mongoose.Schema.Types.ObjectId, ref:"user", required}],
    created_at : {type:Date, default:Date.now(), expires:86400}
}, {timestamps : true})

const Story = mongoose.model("story", storySchema)

export default Story