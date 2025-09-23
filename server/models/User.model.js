import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : { type : String, required : true },
    email : { type : String, requird : true, unique : true },
    user_name : { type : String, required : true, unique : true },
    password : { type : String, required : true },
    profile_pic : { type : String, default : "" },
    bio : { type : String, default : "" },
    followers : [],
    following : [],
    posts : [],
    reels : [],
    stories : []
}, {timestamps : true})

const User = mongoose.model("user", userSchema)

export default User